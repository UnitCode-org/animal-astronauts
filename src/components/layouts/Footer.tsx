"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useScroll } from "@/context/ScrollContext";

function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const scroll = useScroll();

  const handleHomeClick = () => {
    if (pathname === "/") {
      scroll?.scrollToHero();
    } else {
      router.push("/");
    }
  };

  const handleAboutClick = () => {
    if (pathname === "/") {
      scroll?.scrollToAbout();
    } else {
      router.push("/#about");
    }
  };

  return (
    <footer className="relative z-30 grid w-full max-w-screen-2xl grid-cols-2 justify-between px-6 py-6 md:px-16 md:pt-32 md:pb-20">
      <Image
        src="/images/logo/logo-type-white.svg"
        alt="AA Logo"
        width={175}
        height={175}
      />
      <div className="flex flex-col justify-end gap-x-20 gap-y-6 text-right text-base md:text-lg sm:flex-row">
        <ul className="flex flex-col gap-y-2">
          <li onClick={handleHomeClick} className="cursor-pointer">
            Home
          </li>
          <li onClick={handleAboutClick} className="cursor-pointer">
            About
          </li>
          <li className="cursor-pointer">Application</li>
          <li>
            <Link href="/collection">Collection</Link>
          </li>
        </ul>
        <Link href="https://unit.network/" target="_blank">
          Unit Network
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
