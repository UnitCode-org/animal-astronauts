"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const parallaxSpeed = isMobile ? -2000 : -150;
  const pathname = usePathname();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <ParallaxProvider>
      <main className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-unit-blue-50 font-inter text-white overflow-y-clip overflow-x-hidden">
        <Parallax
          speed={parallaxSpeed}
          className="w-full inset-0 absolute z-10"
        >
          <Image
            src="/images/decoration/stars.svg"
            alt="stars"
            fill
            className={`w-screen h-auto ${
              pathname === "/collection" && "object-cover"
            }`}
          />
        </Parallax>
        <Navbar />
        {children}
        <Footer />
      </main>
    </ParallaxProvider>
  );
}

export default Layout;
