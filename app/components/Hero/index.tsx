import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero: FC = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="text-center md:text-right order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            כותרת ראשית
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            תיאור קצר של הפרויקט
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium"
          >
            התחל עכשיו
          </motion.button>
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/hero-image.jpg"
              alt="Hero"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
