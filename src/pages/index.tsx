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
      description="Astar Collective Official Documentation with user guides, tutorials, technical information, and tools for developers."
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
