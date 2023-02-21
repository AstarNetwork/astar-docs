import React from 'react';
import '../../css/homepage-features.scss';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  link: string;
  iconClass: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>About Astar</Translate>,
    link: '/docs/about/astar',
    iconClass: 'aboutastar',
    description: (
      <>
        <Translate>Get to know what Astar Network is solving and all the information related to our native token.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Ecosystem</Translate>,
    link: '/docs/ecosystem/',
    iconClass: 'ecosystem',
    description: (
      <>
        <Translate>Dive into our ecosystem and discover more about Polkadot, Substrate and other initiatives.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Start Building</Translate>,
    link: '/docs/build/',
    iconClass: 'wrench',
    description: (
      <>
        <Translate>Find all the resources you need in order to start testing, deploying, and interacting with smart contracts on the network.</Translate>
      </>
    ),
  },
  {
    title: <Translate>dApp Staking</Translate>,
    link: '/docs/dapp-staking/',
    iconClass: 'staking',
    description: (
      <>
        <Translate>Earn tokens for yourself and your dApp by staking tokens and registering your dApp with Astar’s dApp Staking.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Use EVM</Translate>,
    link: '/docs/build/evm/',
    iconClass: 'evm',
    description: (
      <>
        <Translate>Dive deeper into EVM on Astar and explains how EVM contracts can interact with other non-EVM modules through precompiles.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Use WASM with Swanky</Translate>,
    link: '/docs/build/wasm/',
    iconClass: 'wasm',
    description: (
      <>
        <Translate>Use all-in-one Swanky Suite to start building WASM smart contracts. Get an overview of ink! and ask! WASM contract frameworks and examples for each framework.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Run A Node</Translate>,
    link: '/docs/nodes/',
    iconClass: 'node',
    description: (
      <>
        <Translate>Explain how to run full nodes, collators, indexers, and everything you need to know related to infrastructure.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Learn Cross-Chain Message (XCM)</Translate>,
    link: '/docs/xcm/',
    iconClass: 'broadcast',
    description: (
      <>
        <Translate>Explain how XCM is used in Astar and how developers can use it to interact with the rest of the Polkadot network.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Integrate Toolings</Translate>,
    link: '/docs/integrations/',
    iconClass: 'tool',
    description: (
      <>
        <Translate>Provide relevant information about the wallets, bridges, indexers, and oracles that are integrated with the network.</Translate>
      </>
    ),
  },
  {
    title: <Translate>User Guides</Translate>,
    link: '/docs/user-guides/',
    iconClass: 'docs',
    description: (
      <>
        <Translate>Learn how to create different types of wallets, obtain tokens, and manage your assets.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Builder Guides</Translate>,
    link: '/docs/build/builder-guides/',
    iconClass: 'docs',
    description: (
      <>
        <Translate>Learn how to use tools and build projects in Astar ecosystem.</Translate>
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
