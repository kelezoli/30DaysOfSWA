import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'An introduction',
    Svg: require('@site/static/img/svg/logo.svg').default,
    link: "roadmap",
    description: (
      <>
          This handbook is an introduction to Digital Reality tools and approaches in vocational education.
      </>
    ),
  },
  /*
  {
    title: 'Building Blocks',
    Svg: require('@site/static/img/svg/landing-blocks.svg').default,
    link: "/roadmap#core-concepts",
    description: (
      <>
        Learn core concepts behind Azure Static Web Apps. Setup your dev environment.
      </>
    ),
  },
  {
    title: 'Usage Examples',
    Svg: require('@site/static/img/svg/landing-action.svg').default,
    link: "/roadmap#usage-examples",
    description: (
      <>
        See Static Web Apps in action with front-end frameworks,  static site generators.
      </>
    ),
  },
  {
    title: 'Developer Tools',
    Svg: require('@site/static/img/svg/landing-devtools.svg').default,
    link: "/roadmap#developer-tools",
    description: (
      <>
        Explore tools and workflows that create the optimal developer experience.
      </>
    ),
  },
  {
    title: 'Best Practices',
    Svg: require('@site/static/img/svg/landing-tips.svg').default,
    link: "/roadmap#best-practices",
    description: (
      <>
       Design better end-to-end user experiences with rich service integrations.
      </>
    ),
  },
  {
    title: 'SWA Anniversary',
    Svg: require('@site/static/img/svg/landing-anniversary.svg').default,
    link: "https://aka.ms/swaanniversary",
    description: (
      <>
        Join us May 19 for our SWA Anniversary. Watch it live or catch the replay.
      </>
    ),
  },
  */
  {
    title: 'For teachers and trainers',
    Svg: require('@site/static/img/svg/landing-showcase.svg').default,
    link: "thismonth",
    description: (
      <>
      A guide to navigate in the terms, tools and approaches. Listing opportunities and pitfalls
      </>
    ),
  },
  {
    title: 'Handbook style',
    Svg: require('@site/static/img/svg/landing-tips.svg').default,
    link: "showcase",
    description: (
      <>
        Easy to read format with a sidebar on the left with the contents. The material is tailored for you.
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
