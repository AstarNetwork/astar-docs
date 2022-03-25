import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Wasm + EVM',
    image: require('@site/static/img/undraw_docusaurus_mountain.svg'),
    description: (
      <>
        Focus on developing your dapps, and we&apos;ll handle the rest. Astar built with Substrate, a blazing fast and modular blockchain framework
        built by Parity and written in Rust.
      </>
    ),
  },
  {
    title: 'Multi-Chain',
    image: require('@site/static/img/undraw_docusaurus_tree.svg'),
    description: (
      <>
        Astar is a Polkadot parachain, providing access to an advanced cross-chain protocol called XCMP.
      </>
    ),
  },
  {
    title: 'Simplicity',
    image: require('@site/static/img/undraw_docusaurus_react.svg'),
    description: (
      <>
        Astar was designed from the ground up to make it simple for developers to deploy
        their dapps and interact with other chains.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
