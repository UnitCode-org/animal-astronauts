import Layout from "@/components/layouts/Layout";
import Hero from "../components/Home/Hero";
import About from "@/components/Home/About";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
