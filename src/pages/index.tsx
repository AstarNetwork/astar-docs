import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Hero } from "@site/src/components/HomePage/Hero";
import { Search } from "@site/src/components/HomePage/Search";
import { Socials } from "@site/src/components/HomePage/Socials";
import { Tabs } from "@site/src/components/HomePage/Tabs";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Astar Network Official Documentation Portal - User Guides, Tutorials, and Tools for Developers."
    >
      <div className={styles.contentWrapper}>
        <Hero />
        <Search searchTags={siteConfig.customFields.searchTags as string[]} />
        <Tabs />
        <Socials />
      </div>
    </Layout>
  );
}
