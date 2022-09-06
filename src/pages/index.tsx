import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import './index.scss';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero--primary hero--banner">
      <div className="container">
        <h1 className="hero__title text--hero">{siteConfig.title}</h1>
        <p className="hero__subtitle text--hero">{siteConfig.tagline}</p>
        <div className="buttons">
          <Link className="button--start" to="/docs/getting-started">
            <span>Get Started</span>
            <i />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation of Astar and Shiden Network - The Future of Smart Contracts for Multichain - both WebAssembly (WASM) and EVM using XCM. Tutorials, user guides and tools for developers and builders.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
