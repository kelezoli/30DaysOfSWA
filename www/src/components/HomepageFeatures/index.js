import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Instructor 2.0',
    Svg: require('@site/static/img/svg/logo.svg').default,
    link:"docs/instructor 2_0",
    description: (
      <>
        A new role emerges. Digital instructors are experts of implementation, use, and teach with virtual tools.
      </>
    ),
  },
  {
    title: 'Before you choose',
    link:"./docs/Before you choose",
    Svg: require('@site/static/img/svg/choice_icon.svg').default,
    description: (
      <>
A guide to navigate in the market. Listing important aspects to consider when selecting a solution.
      </>
    ),
  },
  {
    title: 'Keep it simple',
    Svg: require('@site/static/img/svg/keepitsmiple.svg').default,
    link:"./docs/Pedagogical Guidelines/Keep it simple",
    description: (
      <>
        Here you find simple but clever solutions to gamify materials, entertain and teach students.
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
