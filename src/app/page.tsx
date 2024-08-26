"use client";

import Layout from "@/components/layouts/Layout";
import Hero from "../components/Home/Hero";
import About from "@/components/Home/About";
import Steps from "@/components/Home/Steps";
import Opportunities from "@/components/Home/Opportunities";
import Apply from "@/components/Home/Apply";
import { ScrollProvider } from "@/context/ScrollContext";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const parallaxSpeed = isMobile ? -2000 : -150;

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
    <ScrollProvider>
      <ParallaxProvider>
        <Layout>
          <Parallax
            speed={parallaxSpeed}
            className="w-full inset-0 absolute z-10"
          >
            <Image src="/images/decoration/stars.svg" alt="stars" fill />
          </Parallax>
          <Hero />
          <About />
          <Steps />
          <Opportunities />
          <Apply />
        </Layout>
      </ParallaxProvider>
    </ScrollProvider>
  );
}
