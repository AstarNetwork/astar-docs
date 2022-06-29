import React from 'react';
import '../../css/homepage-features.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  link: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Start Building',
    link: '/docs/quickstart/',
    Svg: require('@site/static/img/wrench.svg').default,
    description: (
      <>
        This section gives you the resources you need to get started testing,
        deploying, and interacting with smart contracts on the network.
      </>
    ),
  },
  {
    title: 'Use EVM',
    link: '/docs/EVM/',
    Svg: require('@site/static/img/evm.svg').default,
    description: (
      <>
        Dive deeper into EVM on Astar and explains how EVM contracts can
        interact with other non-EVM modules through precompiles.
      </>
    ),
  },
  {
    title: 'Use WebAssembly',
    link: '/docs/wasm/',
    Svg: require('@site/static/img/wasm.svg').default,
    description: (
      <>
        Provide an overview of ink! and ask! WASM contract frameworks, examples
        for each framework,developer tooling and compiling Solidity to WASM.
      </>
    ),
  },
  {
    title: 'Run A Node',
    link: '/docs/nodes/',
    Svg: require('@site/static/img/node.svg').default,
    description: (
      <>
        Explain how to run full nodes, collators, indexers, and everything you
        need to know related to infrastructure.
      </>
    ),
  },
  {
    title: 'Learn Cross Chain Message (XCM)',
    link: '/docs/xcm/',
    Svg: require('@site/static/img/broadcast.svg').default,
    description: (
      <>
        Explain how XCM is used in Astar and how developers can use it to
        interact with the rest of the Polkadot network.
      </>
    ),
  },
  {
    title: 'Integrate Toolings',
    link: '/docs/integrations/',
    Svg: require('@site/static/img/tool.svg').default,
    description: (
      <>
        Provide relevant information about the wallets, bridges, indexers, and
        oracles that are integrated with the network.
      </>
    ),
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <Link to={link} className="box">
      <div className="row--title">
        <Svg className="icon" role="img" />
        <span className="text--title">{title}</span>
      </div>
      <div className="row--description">
        <span className="text--description">{description}</span>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="section--front-page">
      <div className="container--front-page">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
