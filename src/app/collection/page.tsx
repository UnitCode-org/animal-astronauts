import { Metadata } from "next";
import { siteConfig } from "@/constant/config";

import Collection from "@/components/Collection/Collection";
import Layout from "@/components/layouts/Layout";

export const metadata: Metadata = {
  title: `${siteConfig.title} | Collection`,
};

export default function CollectionPage() {
  return (
    <Layout>
      <Collection />
    </Layout>
  );
}
