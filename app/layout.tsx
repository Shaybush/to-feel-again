import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "To Feel Again",
  description: "Landing page for DJ Guy",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();
  const darkMode = (await cookies()).get("dark")?.value;

  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={darkMode === "true" ? "dark" : ""}>
      <body
        className={
          "min-h-screen bg-background text-foreground flex flex-col justify-between"
        }
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="h-full ">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
