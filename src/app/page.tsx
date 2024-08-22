import Layout from "@/components/layouts/Layout";
import Hero from "../components/Home/Hero";
import About from "@/components/Home/About";
import Steps from "@/components/Home/Steps";
import Opportunities from "@/components/Home/Opportunities";
import Apply from "@/components/Home/Apply";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Steps />
      <Opportunities />
      {/* <Apply /> */}
    </Layout>
  );
}
