import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import React from 'react';
import '../../css/homepage-features.scss';

type FeatureItem = {
  title: JSX.Element;
  link: string;
  iconClass: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  
  {
    title: <Translate>Learn About Astar Network</Translate>,
    link: '/docs/learn',
    iconClass: 'aboutastar',
    description: (
      <>
        <Translate>
        Learn about our foundations and gain insights into the inner workings of Astar Network. 
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>WASM Stack</Translate>,
    link: '/docs/build/wasm',
    iconClass: 'wasm',
    description: (
      <>
        <Translate>
          Start testing, deploying, and interacting with WebAssembly (WASM) smart contracts on Astar Network.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>EVM Stack</Translate>,
    link: '/docs/build/evm',
    iconClass: 'evm',
    description: (
      <>
        <Translate>
        Start testing, deploying, and interacting with EVM smart contracts on Astar network.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Astar zkEVM Stack</Translate>,
    link: '/docs/build/zkEVM',
    iconClass: 'zkevm',
    description: (
      <>
        <Translate>
          Start building on Astar zkEVM, the Layer 2 scaling solution for Ethereum.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>dApp Staking</Translate>,
    link: '/docs/learn/dapp-staking/',
    iconClass: 'staking',
    description: (
      <>
        <Translate>
          Participate in Astar’s unique mechanism that benefits dApp developers, stakers, and users alike.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Run A Node</Translate>,
    link: '/docs/build/nodes/',
    iconClass: 'node',
    description: (
      <>
        <Translate>
          Learn how to run full nodes, archive and collator nodes, and much more.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Cross-Chain Message (XCM)</Translate>,
    link: '/docs/learn/interoperability/xcm/',
    iconClass: 'broadcast',
    description: (
      <>
        <Translate>
          Learn how XCM ensures seamless interoperability for Astar and the rest of the Polkadot network.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Developer Toolings</Translate>,
    link: '/docs/build/integrations',
    iconClass: 'broadcast',
    description: (
      <>
        <Translate>
          Wallets, bridges, indexers, oracles and much more, integrated with Astar Network.
        </Translate>
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
