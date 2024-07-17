import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Hero } from "@site/src/components/homePage/Hero";
import { Search } from "@site/src/components/homePage/Search";
import { Tabs } from "@site/src/components/homePage/Tabs";
import Layout from "@theme/Layout";
import "./index.scss";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Astar Network Official Documentation Portal - User Guides, Tutorials, and Tools for Developers."
    >
      <div className="contentWrapper">
        <Hero />
        <Search searchTags={siteConfig.customFields.searchTags as string[]} />
        <Tabs />
      </div>
    </Layout>
  );
}
