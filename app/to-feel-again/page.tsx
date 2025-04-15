import React from 'react';
import { Hero } from './(components)/Hero';
import { Content } from './(components)/Content';
import SuitableAudience from './(components)/SuitableAudience';
import { CallToAction } from './(components)/CallToAction';
import { Footer } from '@/app/components/ui/Footer';
import styles from './MainPage.module.css';
import { createMetadata } from '@/lib/seo';
import { FAQ } from './(components)/FAQ';
import Script from 'next/script';

export const metadata = createMetadata({
  title: 'To Feel Again - The place where music & soul comes to life',
  description: 'To Feel Again | Soul | להרגיש מחדש',
});

export default function ToDeelAgainPage() {
  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '887883020102125');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=887883020102125&ev=PageView&noscript=1" />
      </noscript>

      <div className="flex flex-col items-center w-full t-[24px] text-center font-['Heebo',Helvetica] bg-[#020202]">
        <div className="bg-[#020202] text-white w-full max-w-[460px] overflow-hidden">
          {/* Hero Section */}
          <Hero />

          {/* Content Section */}
          <Content />

          {/* suitable audience section */}
          <SuitableAudience />

          {/* Call To Action Section */}
          <CallToAction />

          <div className={styles.dessertBackground}>
            {/* FAQs Section */}
            <FAQ />

            {/* Footer Section */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
