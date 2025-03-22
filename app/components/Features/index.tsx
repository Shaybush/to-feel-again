import { FC } from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "../FeatureCard";

export const Features: FC = () => {
  const features = [
    {
      title: "כותרת תכונה 1",
      description: "תיאור של התכונה הראשונה",
      icon: "🎯",
    },
    // Add more features as needed
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
