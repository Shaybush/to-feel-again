import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { Heebo } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-heebo",
  display: "swap",
});

const cremona = localFont({
  src: "../public/fonts/FontsFree-Net-Cremona.ttf",
  display: "swap",
  variable: "--font-cremona",
});

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
    <html
      lang={locale}
      dir={dir}
      className={`${heebo.variable} ${cremona.variable} ${
        darkMode === "true" ? "dark" : ""
      }`}
    >
      <body
        className={
          "min-h-screen bg-background text-foreground flex flex-col justify-between"
        }
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="h-full">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
