import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { HambergerMenu } from "iconsax-react";
import Link from "next/link";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <Sheet>
      <nav
        className="fixed left-0 top-0 z-[60] w-screen bg-unit-blue-50 backdrop-blur-md"
        style={{ WebkitBackdropFilter: "blur(12px)" }}
      >
        <div className="mx-auto flex w-full max-w-screen-2xl items-center px-8 py-6 transition-all sm:px-16">
          <div className="mr-auto flex items-center gap-x-3">
            <div className="relative cursor-pointer">
              <Image
                src="/images/logo/logo-type-purple.svg"
                alt="Animal Astronauts"
                width={150}
                height={150}
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
            </div>
          </div>
          <div className="hidden items-center gap-x-8 lg:flex">
            <Button
              variant="glassmorphism"
              className="relative inline-block overflow-hidden"
            >
              <span className="relative z-10">Home</span>
              <div className="w-12 h-16 absolute inset-0 z-0 rounded-lg bg-[#5C33FF] blur-lg opacity-70 left-1/2 transform -translate-x-1/2" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-unit-purple-30" />
            </Button>
            <Button variant="glassmorphism">About</Button>
            <Button variant="glassmorphism">Application</Button>
            <Link href="/collection">
              <Button variant="gradient">Collection</Button>
            </Link>
          </div>
          <SheetTrigger>
            <HambergerMenu className="block size-8 lg:hidden" />
          </SheetTrigger>
        </div>
      </nav>
      <SheetContent className="z-[60] w-64 border-0 bg-unit-gray-30 text-white">
        <ul className="mt-12 flex flex-col items-end justify-start gap-y-6 font-poppins text-xl font-semibold">
          <li>
            <SheetClose>
              <div>Home</div>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <div>About</div>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <div>Application</div>
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
