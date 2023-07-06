import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
<<<<<<< HEAD
    title: 'Instructor 2.0',
    Svg: require('@site/static/img/svg/instructor.svg').default,
    link:"docs/Instructor 2_0",
    description: (
      <>
        A new role emerges. Digital instructors are experts of implementation, use, and teach with virtual tools.
=======
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
>>>>>>> d6ed69407996172c60bc656c1266cfdf938f8dcc
      </>
    ),
  },
  {
<<<<<<< HEAD
    title: 'Before you choose',
    link:"./docs/Digital Reality in VET/Before you choose",
    Svg: require('@site/static/img/svg/hesitating.svg').default,
    description: (
      <>
A guide to navigate in the market. Listing important aspects to consider when selecting a solution.
      </>
    ),
  },
  {
    title: 'Pedgagogical Guidelines',
    Svg: require('@site/static/img/svg/ped_guide_timber.svg').default,
    link:"./docs/Pedagogical Guidelines",
    description: (
      <>
        Here you find simple but clever solutions to gamify materials, entertain and teach students.
=======
    title: 'Sites',
    Svg: require('@site/static/img/svg/sites.svg').default,
    link: "docs/Sites",
    description: (
      <>
        Look around in the Sites collections to get new ideas and connections.
>>>>>>> d6ed69407996172c60bc656c1266cfdf938f8dcc
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
