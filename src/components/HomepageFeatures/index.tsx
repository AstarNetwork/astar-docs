import React from 'react';
import '../../css/homepage-features.scss';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  link: string;
  iconClass: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About Astar',
    link: '/docs/about/astar',
    iconClass: 'aboutastar',
    description: (
      <>
        Get to know what Astar Network is solving and all the information related to our native token.
      </>
    ),
  },
  {
    title: 'Ecosystem',
    link: '/docs/ecosystem/',
    iconClass: 'ecosystem',
    description: (
      <>
        Dive into our ecosystem and discover more about Polkadot, Substrate and other initiatives.
      </>
    ),
  },
  {
    title: 'Start Building',
    link: '/docs/quickstart/',
    iconClass: 'wrench',
    description: (
      <>
        Find all the resources you need in order to start testing, deploying, and interacting with smart contracts on the network.
      </>
    ),
  },
  {
    title: 'dApp Staking',
    link: '/docs/dapp-staking/',
    iconClass: 'staking',
    description: (
      <>
        Earn tokens for yourself and your dApp by staking tokens and registering
        your dApp with Astar’s dApp Staking.
      </>
    ),
  },
  {
    title: 'Use EVM',
    link: '/docs/EVM/',
    iconClass: 'evm',
    description: (
      <>
        Dive deeper into EVM on Astar and explains how EVM contracts can
        interact with other non-EVM modules through precompiles.
      </>
    ),
  },
  {
    title: 'Use WASM with Swanky',
    link: '/docs/wasm/',
    iconClass: 'wasm',
    description: (
      <>
        Use all-in-one Swanky Suite to start building WASM smart contracts. Get an overview of ink! and ask! WASM contract frameworks and examples
        for each framework.
      </>
    ),
  },
  {
    title: 'Run A Node',
    link: '/docs/nodes/',
    iconClass: 'node',
    description: (
      <>
        Explain how to run full nodes, collators, indexers, and everything you
        need to know related to infrastructure.
      </>
    ),
  },
  {
    title: 'Learn Cross-Chain Message(XCM)',
    link: '/docs/xcm/',
    iconClass: 'broadcast',
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
    iconClass: 'tool',
    description: (
      <>
        Provide relevant information about the wallets, bridges, indexers, and
        oracles that are integrated with the network.
      </>
    ),
  },
  {
    title: 'User Guides',
    link: '/docs/user-guides/',
    iconClass: 'docs',
    description: (
      <>
        Learn how to create different types of wallets, obtain tokens, and
        manage your assets.
      </>
    ),
  },
];

function Feature({ title, iconClass, description, link }: FeatureItem) {
  return (
    <Link to={link} className="box">
      <div className="row--title">
        <div className={`${iconClass} icon`} />
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
