import { useTranslations } from 'next-intl';
import React from 'react';
import { cn } from '@/lib/utils';
import styles from './Hero.module.css';
import LazyYouTube from '@/app/components/LazyYoutube';
import { Logo } from '@/app/components/ui/Logo';
import EventDetails from '../EventDetails';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <main className={`${cn('pt-[100px] font-[300]', styles.background)}`}>
      {/* Welcome heading */}
      <div className="mb-[15px]">
        <h1 className="font-['Cremona'] font-[400] text-[65px] whitespace-nowrap mb-[50px]">{t('welcome')}</h1>

        <div className="text-[30px]">
          <p className="para1 gap-2 flex flex-col leading-10 mb-[60px]">
            <span>{t('get_call')}</span>
            <span>{t('get_call_description')}</span>
          </p>

          <p>{t('new_things')}</p>
          <p className="text-[20px] mt-[15px]">{t('click_me')}</p>
        </div>
      </div>

      {/* Middle section with screenshot */}
      <div className="mb-[140px]">
        <LazyYouTube videoId="JIViIQnZP_A" title="DJ preview video" />
      </div>

      {/* Bottom quote section */}
      <div className="mb-[30px]">
        <div className="text-[32px] mb-[60px] leading-normal">
          <p>{t('bottom_quote1')}</p>
          <p>{t('bottom_quote2')}</p>
        </div>

        <p className="text-[24px] leading-normal mb-[40px]">{t('bottom_quote_description')}</p>

        {/* Logo */}
        <div className="h-[251px]">
          <Logo />
        </div>
      </div>

      {/* Event */}
      <EventDetails />
    </main>
  );
};
