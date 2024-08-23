"use client";

import Layout from "@/components/layouts/Layout";
import Hero from "../components/Home/Hero";
import About from "@/components/Home/About";
import Steps from "@/components/Home/Steps";
import Opportunities from "@/components/Home/Opportunities";
import Apply from "@/components/Home/Apply";
import { ScrollProvider } from "@/context/ScrollContext";

export default function Home() {
  return (
    <ScrollProvider>
      <Layout>
        <Hero />
        <About />
        <Steps />
        <Opportunities />
        <Apply />
      </Layout>
    </ScrollProvider>
  );
}
