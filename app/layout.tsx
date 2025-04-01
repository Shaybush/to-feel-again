import { cookies } from 'next/headers';
import './globals.css';
import { Heebo } from 'next/font/google';
import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { NEXT_PUBLIC_GA_ID } from '@/consts';

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  variable: '--font-heebo',
  display: 'swap',
});

const cremona = localFont({
  src: '../public/fonts/FontsFree-Net-Cremona.ttf',
  display: 'swap',
  variable: '--font-cremona',
});

export const metadata = {
  title: {
    default: 'To Feel Again - The place where music & soul comes to life',
    template: '%s | Soul',
  },
  description: 'To Feel Again | Soul | להרגיש מחדש',
  twitter: {
    card: 'summary_large_image',
    creator: '@Twitter',
  },
  countryName: 'Israel',
  locale: 'he_IL',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();
  const darkMode = (await cookies()).get('dark')?.value;

  const dir = locale === 'he' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${heebo.variable} ${cremona.variable} ${darkMode === 'true' ? 'dark' : ''}`}>
      <head>
        <link rel="canonical" href="https://iam-soul.com/to-feel-again" />
        <meta name="apple-mobile-web-app-title" content="Soul" />
        <meta name="country-name" content="Israel" />
        <meta property="og:image" content="/IG-Ads.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DJ Guy Baram Soul" />
        <meta name="creator" content="DJ Guy Baram Soul" />
        <meta name="keywords" content="DJ Guy, To Feel Again, music, electronic, live set, party, mix, techno, trance" />
        <meta name="publisher" content="DJ Guy Productions" />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={'min-h-screen bg-background text-foreground flex flex-col justify-between'}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="h-full">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
