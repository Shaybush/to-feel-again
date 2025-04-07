import { CallToActionButton } from '@/app/components/ui/CallToActionButton';
import { useTranslations } from 'next-intl';

export const CallToAction = () => {
  const t = useTranslations('CallToAction');

  return (
    <section className="text-center font-[300] flex flex-col items-center justify-center pt-20 mb-[40px] gap-6">
      <h3 className="text-[40px] mb-4">{t('header')}</h3>

      <CallToActionButton isUseConfettie={true} />
    </section>
  );
};
