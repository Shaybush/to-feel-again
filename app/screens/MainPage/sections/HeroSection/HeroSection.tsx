import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import DessertView from '@/assets/Dessert View.png';
import Logo from './Logo';

export const HeroSection = () => {
  const t = useTranslations('Hero');
  return (
    <section className="relative w-full text-white" dir="rtl">
      <div className="relative flex justify-end">
        <div className="relative w-[464px]">
          <Image
            width={460}
            height={1600}
            className="object-cover"
            alt="Desert view"
            src={DessertView}
          />

          {/* Welcome heading */}
          <div className="absolute w-full top-[120px]">
            <h1 className="font-['Cremona-Regular',Helvetica] text-[65px] font-extralight text-center whitespace-nowrap">
              {t('welcome')}
            </h1>

            <div className="mt-[50px] text-3xl font-['Heebo',Helvetica] text-center font-extralight">
              <p className="gap-2 flex flex-col leading-10 mb-[80px]">
                <span className="block">{t('get_call')}</span>
                <span className="block">{t('get_call_description')}</span>
              </p>

              <span>{t('new_things')}</span>
            </div>
          </div>

          {/* Middle section with screenshot */}
          <div className="absolute top-[500px] left-[13px]">
            <Image
              width={434}
              height={236}
              className="object-cover"
              alt="Screenshot"
              src="https://c.animaapp.com/eLObDMFN/img/screenshot-2025-03-08-at-17-41-01-1@2x.png"
            />
          </div>

          {/* Bottom quote section */}
          <div className="absolute top-[855px] font-extralight">
            <div className="font-['Heebo',Helvetica] text-center">
              <p className="font-extralight text-3xl mb-[60px] leading-normal">
                {t('bottom_quote')}
              </p>

              <p className="font-extralight text-2xl leading-normal mb-[40px]">
                {t('bottom_quote_description')}
              </p>

              {/* Logo */}
              <div className="flex items-center justify-center">
                <Logo />
              </div>
            </div>
          </div>

          {/* Event section */}
          <div className="absolute w-full top-[1320px] font-extralight [direction:ltr]">
            <div className="flex flex-col items-center justify-center">
              <h3 className=" text-3xl font-light uppercase mb-[5px]">
                {t('event_slogan')}
              </h3>

              <p className=" text-2xl font-extralight mb-[10px]">
                {t('event_date')}
              </p>

              <p className=" text-xl font-extralight">{t('event_location')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
