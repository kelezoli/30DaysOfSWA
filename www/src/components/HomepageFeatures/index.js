import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is Ageism?',
    Svg: require('@site/static/img/svg/whatisageism.svg').default,
    link: "docs/Articles/About ageism",
    description: (
      <>
          Read the articles to get familiar with Ageism - treating a person less favorably than others ...
      </>
    ),
  },

  {
    title: 'Games',
    Svg: require('@site/static/img/svg/games.svg').default,
    link: "docs/Games",
    description: (
      <>
      A guide to navigate in the terms, tools and approaches. Listing opportunities and pitfalls
      </>
    ),
  },
  {
    title: 'Sites',
    Svg: require('@site/static/img/svg/sites.svg').default,
    link: "docs/Sites",
    description: (
      <>
        Look around in the Sites collections to get new ideas and connections.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} target="_blank">
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
