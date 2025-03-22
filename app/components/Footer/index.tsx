import Image from "next/image";
import { FC } from "react";

export const Footer: FC = () => {
  const footerSections = [
    {
      title: "ניווט מהיר",
      links: [
        { text: "דף הבית", href: "/" },
        { text: "אודות", href: "/about" },
        { text: "שירותים", href: "/services" },
        { text: "צור קשר", href: "/contact" },
      ],
    },
    {
      title: "משאבים",
      links: [
        { text: "מדיניות פרטיות", href: "/privacy" },
        { text: "תנאי שימוש", href: "/terms" },
        { text: "שאלות נפוצות", href: "#faq" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Image
              src="/logo-white.png"
              alt="Logo"
              className="w-32 mb-4"
              width={1000}
              height={1000}
            />
            <p className="text-gray-400 max-w-md">
              תיאור קצר של החברה או המוצר שלך יכול להופיע כאן. זה יכול להיות בן
              שתיים או שלוש שורות.
            </p>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
};
