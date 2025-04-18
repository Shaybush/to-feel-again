'use client';

import { useTranslations } from 'next-intl';
import { Button } from './button';
import { useRef } from 'react';
import { ConfettiClientOnly, ConfettiHandle } from '../ConfettiClientOnly';

const PAYMENT_URL = 'https://payments.payplus.co.il/l/620253b8-3cb9-4af9-ab5b-96de8f648a33';

export function CallToActionButton({ isUseConfettie = false, confettiDelay = 500 }) {
  const t = useTranslations('CallToAction');
  const confettiRef = useRef<ConfettiHandle>(null);

  const openPaymentPage = () => {
    window.open(PAYMENT_URL, '_blank');
  };

  const handleClick = () => {
    if (isUseConfettie) {
      confettiRef.current?.fire({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.8 },
      });

      setTimeout(openPaymentPage, confettiDelay);
    } else {
      openPaymentPage();
    }
  };

  return (
    <>
      <Button
        onClick={handleClick}
        className="px-8 py-6 rounded-full border border-white bg-[#B8F2FF9E] hover:bg-[#6a8d95] text-[24px] text-white font-medium shadow-md [direction:ltr]"
      >
        {t('button_context')} {t('register')}
      </Button>
      <ConfettiClientOnly ref={confettiRef} triggerOnMount={false} />
    </>
  );
}
