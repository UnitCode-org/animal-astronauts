"use client";

import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { HambergerMenu } from "iconsax-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useScroll } from "@/context/ScrollContext";

function Navbar() {
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
    <Sheet>
      <nav className="fixed left-0 top-0 z-40 w-screen">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center px-6 py-6 transition-all md:px-16">
          <div className="mr-auto flex items-center gap-x-3">
            <div className="relative">
              <Link href="/">
                <Image
                  src="/images/logo/logo-type-purple.svg"
                  alt="Animal Astronauts"
                  width={175}
                  height={175}
                  priority={true}
                  className="hidden lg:block h-auto"
                />
                <Image
                  src="/images/logo/logo-purple.svg"
                  alt="Animal Astronauts"
                  width={44}
                  height={44}
                  priority={true}
                  className="block lg:hidden h-auto"
                />
              </Link>
            </div>
          </div>
          <div className="hidden items-center gap-x-8 lg:flex">
            <Button
              variant="glassmorphism"
              className="relative inline-block overflow-hidden"
              onClick={handleHomeClick}
            >
              {pathname === "/" ? (
                <>
                  <span className="relative z-10">Home</span>
                  <div className="w-12 h-16 absolute inset-0 z-0 rounded-lg bg-[#5C33FF] blur-lg opacity-80 left-1/2 transform -translate-x-1/2" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-unit-purple-30" />
                </>
              ) : (
                <span>Home</span>
              )}
            </Button>
            <Button variant="glassmorphism" onClick={handleAboutClick}>
              About
            </Button>
            <Button variant="glassmorphism">Membership</Button>
            <Link href="/collection">
              <Button variant="gradient">Collection</Button>
            </Link>
          </div>
          <SheetTrigger>
            <div className="bg-white/15 backdrop-blur rounded-full px-3 py-2 lg:hidden">
              <HambergerMenu className="block size-6" />
            </div>
          </SheetTrigger>
        </div>
      </nav>
      <SheetContent className="z-40 w-64 border-0 bg-unit-gray-30 text-white">
        <ul className="mt-12 flex flex-col items-end justify-start gap-y-6 font-poppins text-xl font-semibold z-50">
          <li>
            <SheetClose>
              <div onClick={handleHomeClick}>Home</div>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <div onClick={handleAboutClick}>About</div>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <div>Membership</div>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <Link href="/collection">
                <Button variant="gradient" size="large" className="text-[20px]">
                  Collection
                </Button>
              </Link>
            </SheetClose>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default Navbar;
