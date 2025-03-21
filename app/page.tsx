import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
        items-center 
        justify-items-center 
       pt-16
        font-[family-name:var(--font-geist-sans)]
        bg-background  
        text-foreground 
        transition-colors 
        duration-300
      "
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert  dark:hover:invert z-0"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
