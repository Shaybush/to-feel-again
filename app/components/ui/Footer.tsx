"use client";

import LogoSoul from "@/assets/logo_soul.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ApplyMusic from "@/assets/apple-music.svg";
import Instagram from "@/assets/instagram.svg";
import Spotify from "@/assets/spotify.svg";
import Link from "next/link";
import { Separator } from "@/app/tofeelagain/Separator";

export function Footer() {
  const t = useTranslations("Footer");
  const media = [
    {
      id: 1,
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/guybaram_soul/",
    },
    {
      id: 2,
      icon: Spotify,
      label: "Spotify",
      link: "https://open.spotify.com/artist/3XmHjFqAWjEjaceL2BkDw7?si=ReYdFcd6SOKf8YP0zQpGHQ&nd=1&dlsi=aa870e85f4494fcd",
    },
    {
      id: 3,
      icon: ApplyMusic,
      label: "Apple music",
      link: "https://music.apple.com/il/artist/soul/1765970378",
    },
  ];
  return (
    <footer className="font-[200] text-[24px]">
      <p className="mb-6">{t("whoami")}</p>

      {/* social media */}
      <div className="max-w-1/2 mx-auto">
        <div className="flex justify-between items-center">
          {media.map((platform) => (
            <Link
              key={platform.id}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={platform.icon} alt={platform.label} />
            </Link>
          ))}
        </div>
        <Separator className="mx-auto mb-4 mt-3" />
      </div>

      {/* contact */}
      <p className="text-[20px]">{t("contact")}</p>
      <p>{t("mail")}</p>

      {/* logo */}
      <Image className="mx-auto" src={LogoSoul} alt="logo soul" />
    </footer>
  );
}
