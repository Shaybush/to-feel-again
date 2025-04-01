'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import LogoSrc from '@/assets/logo_vertical_v1.png';
import LogoSrc2 from '@/assets/logo_vertical_v2.png';
import Image from 'next/image';

export function Logo({ secLogo = false, styleClass = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true,
  });

  return (
    <div ref={ref} className="flex items-center justify-center min-h-[251px]">
      <motion.div
        className="overflow-hidden"
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={isInView ? { maxHeight: 251, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <Image className={styleClass} src={secLogo ? LogoSrc2 : LogoSrc} alt="Logo" />
      </motion.div>
    </div>
  );
}
