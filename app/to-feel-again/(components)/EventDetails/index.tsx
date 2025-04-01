'use client';

import React from 'react';
import styles from './EventDetails.module.css';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export default function EventDetails() {
  const t = useTranslations('Hero');

  return (
    <div>
      {/* Slide in from left when in view */}
      <motion.h3
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="font-['Cremona'] text-[48px] font-[400] uppercase"
      >
        {t('event_slogan')}
      </motion.h3>

      {/* Zoom in when in view */}
      <motion.p
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-[48px]"
      >
        {t('event_date')}
      </motion.p>

      <div className={cn('text-[24px]', styles.djBackground)}>
        {/* Zoom out with delay when in view */}
        <motion.p
          className="mb-2"
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {t('event_time')}
        </motion.p>

        {/* Zoom out when in view */}
        <motion.p
          className="[direction:ltr]"
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {t('event_location')}
        </motion.p>
      </div>
    </div>
  );
}
