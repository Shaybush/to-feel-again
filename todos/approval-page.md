# ✅ Zapier + Next.js + Prisma + PostgreSQL Approval Flow

This markdown explains how to build a flow where:

1. Zapier receives a signed document (אֲשָׁמָה / approval)
2. It stores it in your database (PostgreSQL via Prisma)
3. It triggers your API
4. Your API sends an email with a custom ticket link:
   ```
   https://iam-soul.com/approved-ticket/:id
   ```

````

---

## ✅ 1. Define Prisma DB Schema

`prisma/schema.prisma`
```prisma
model Approval {
  id        String   @id @default(cuid())
  fullName  String
  email     String
  fileUrl   String   // uploaded file URL
  createdAt DateTime @default(now())
  status    String   @default("approved")
}
````

Then run:

```bash
npx prisma migrate dev --name init-approvals
```

---

## ✅ 2. Create API Route to Receive Data

Create: `app/api/approval/route.ts`

```ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { fullName, email, fileUrl } = await req.json();

  const saved = await prisma.approval.create({
    data: { fullName, email, fileUrl },
  });

  return NextResponse.json(saved);
}
```

---

## ✅ 3. Set Up Zapier

- **Trigger**: File signed (e.g. from DocuSign / Google Form)
- **Action**: Webhooks by Zapier → POST
  - URL: `https://iam-soul.com/api/approval`
  - Method: POST
  - Headers:
    ```
    Content-Type: application/json

````
  - Body (JSON):
    ```json
    {
      "fullName": "John Doe",
      "email": "john@example.com",
      "fileUrl": "https://zapier.com/signed-file.pdf"
    }
    ```

---

## ✅ 4. Send Email (Zapier or Server)

### Option A: Send from Zapier
Add another Zapier action → Send email with Gmail or Outlook:
````

https://iam-soul.com/approved-ticket/{{id}}

````
Note: Only works if you return the ID and pass to the next step.

### Option B: Send from Next.js server (Recommended)
After `approval.create`, use Resend / Nodemailer to send a mail.

---

## ✅ 5. Show the Ticket via Dynamic Route

`app/approved-ticket/[id]/page.tsx`
```tsx
import { prisma } from '@/lib/prisma';

export default async function TicketPage({ params }: { params: { id: string } }) {
  const approval = await prisma.approval.findUnique({
    where: { id: params.id },
  });

  if (!approval) return <div>Not Found</div>;

  return (
    <div className="p-10">
      <h1>Welcome, {approval.fullName}</h1>
      <p>Your approval is ready.</p>
      <a href={approval.fileUrl} target="_blank" className="underline text-blue-600">
        View Signed Document
      </a>
    </div>
  );
}
````

---

## ✅ Summary

| Step | Tool    | Task                                         |
| ---- | ------- | -------------------------------------------- |
| 1    | Prisma  | Define DB model                              |
| 2    | API     | Accept approval data via POST                |
| 3    | Zapier  | Trigger webhook and send approval data       |
| 4    | Email   | Notify user via Resend or Zapier             |
| 5    | Next.js | Serve approved ticket page via dynamic route |

Let me know if you want to add attachments, QR codes, or tracking!
