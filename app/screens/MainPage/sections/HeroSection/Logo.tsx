'use client';

import { motion } from 'framer-motion';
import LogoSrc from '@/assets/Logo - Soul Shape 1.png';
import Image from 'next/image';

export default function Logo() {
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ height: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ height: 'auto' }}
    >
      <Image width={50} height={50} src={LogoSrc} alt="Logo" />
    </motion.div>
  );
}
