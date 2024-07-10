import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from "@theme/Layout";
import { createContext, useContext, useEffect, useState } from "react";
import './index.scss';
import docsearch from "@docsearch/js";
import "@docsearch/css";
import { useSearch } from "../theme/Root";



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { setIsOpen, isOpen } = useSearch();

  useEffect(() => {
    console.log("useEffect", isOpen);
  }, [isOpen]);
  return (
    <header className="hero hero--primary hero--banner">
      <div className="container">
        <h1 className="hero__title text--hero">{siteConfig.title}</h1>
        <div id="search_container" />
        <p className="hero__subtitle text--hero">{siteConfig.tagline}</p>

        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          Change
        </button>
      </div>
    </header>
  );
}



export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Astar Network Official Documentation Portal - User Guides, Tutorials, and Tools for Developers."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
