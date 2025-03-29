# 📬 Sending Beautiful Approval Emails in Next.js with Resend

This guide helps you integrate **Resend** with **Next.js**, **Prisma**, and **Zapier** to send beautiful, personalized emails after a user receives approval.

---

## ✅ What You'll Build

A flow that:

1. Receives data from Zapier
2. Stores it in a PostgreSQL DB via Prisma
3. Sends a custom, well-designed email using Resend

---

## 🧱 1. Create the Prisma Model

In `prisma/schema.prisma`:

```prisma
model Approval {
  id        String   @id @default(cuid())
  fullName  String
  email     String
  fileUrl   String
  createdAt DateTime @default(now())
  status    String   @default("approved")
}
```

Run the migration:

```bash
npx prisma migrate dev --name init-approvals
```

---

## 📦 2. Install Resend

```bash
pnpm install resend
```

Create a `.env` entry:

```env
RESEND_API_KEY=your_resend_api_key_here
```

---

## 📨 3. Create the Email Template

Create a file `emails/ApprovedEmail.tsx`:

```tsx
// emails/ApprovedEmail.tsx

export const ApprovedEmail = ({
  name,
  ticketId,
}: {
  name: string;
  ticketId: string;
}) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2 style={{ color: "#333" }}>שלום {name},</h2>
      <p>האישור שלך התקבל בהצלחה.</p>
      <p>
        תוכל לצפות בו כאן:
        <br />
        <a
          href={`https://iam-soul.com/approved-ticket/${ticketId}`}
          style={{
            color: "#4F46E5",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          לחץ כאן לצפייה באישור
        </a>
      </p>
      <p style={{ fontSize: "12px", color: "#999", marginTop: "30px" }}>
        צוות IAM Soul
      </p>
    </div>
  );
};
```

---

## 🛠️ 4. Send Email Function

In `lib/email.ts`:

```ts
import { Resend } from "resend";
import { ApprovedEmail } from "@/emails/ApprovedEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendApprovalEmail({
  email,
  name,
  ticketId,
}: {
  email: string;
  name: string;
  ticketId: string;
}) {
  return await resend.emails.send({
    from: "Soul Approvals <no-reply@your-domain.com>",
    to: email,
    subject: "האישור שלך התקבל",
    react: ApprovedEmail({ name, ticketId }),
  });
}
```

---

## 📡 5. Use in API Route

In `app/api/approval/route.ts`:

```ts
import { prisma } from "@/lib/prisma";
import { sendApprovalEmail } from "@/lib/email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { fullName, email, fileUrl } = await req.json();

  const saved = await prisma.approval.create({
    data: {
      fullName,
      email,
      fileUrl,
    },
  });

  await sendApprovalEmail({
    email,
    name: fullName,
    ticketId: saved.id,
  });

  return NextResponse.json({ success: true, id: saved.id });
}
```
