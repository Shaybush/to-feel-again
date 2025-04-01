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
  openGraph: {
    title: 'To Feel Again - The place where music & soul comes to life',
    description: 'To Feel Again | Soul | להרגיש מחדש',
    url: 'https://iam-soul.com/to-feel-again',
    siteName: 'To Feel Again',
    images: [
      {
        url: 'https://iam-soul.com/IG-Ads.png',
        width: 1200,
        height: 630,
        alt: 'To Feel Again Preview',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Twitter',
    images: ['https://iam-soul.com/IG-Ads.png'],
  },
  alternates: {
    canonical: 'https://iam-soul.com/to-feel-again',
  },
  authors: [{ name: 'DJ Guy Baram Soul' }],
  creator: 'DJ Guy Baram Soul',
  publisher: 'DJ Guy Productions',
  keywords: ['DJ Guy', 'To Feel Again', 'music', 'electronic', 'live set', 'party', 'mix', 'techno', 'trance'],
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
