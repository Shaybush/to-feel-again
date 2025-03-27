"use client";

import { motion } from "framer-motion";
import LogoSrc from "@/assets/logo_vertical_v1.png";
import LogoSrc2 from "@/assets/logo_vertical_v2.png";
import Image from "next/image";

export function Logo({ secLogo = false, styleClass = "" }) {
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ height: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.5 }}
      whileInView={{ height: "auto" }}
    >
      <Image
        className={styleClass}
        src={secLogo ? LogoSrc2 : LogoSrc}
        alt="Logo"
      />
    </motion.div>
  );
}
