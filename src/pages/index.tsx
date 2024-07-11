import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from "@theme/Layout";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import './index.scss';
import docsearch from "@docsearch/js";
import "@docsearch/css";
import { useSearch } from "../theme/Root";



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { setQuery } = useSearch();
  const inputRef = useRef(null);
  function handleSearch() {
    setQuery(inputRef.current.value);
    inputRef.current.value = "";
  }
  function handleEnter(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <header className="hero hero--primary hero--banner">
      <div className="container">
        <h1 className="hero__title text--hero">{siteConfig.title}</h1>
        <div id="search_container" />
        <p className="hero__subtitle text--hero">{siteConfig.tagline}</p>
        <input ref={inputRef} type="text" id="search_input" onKeyUp={handleEnter} />
        <button type="button" onClick={handleSearch}>
          Search
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
