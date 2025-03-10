import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Image from '@theme/IdealImage';
<<<<<<< HEAD
import comicstrip from '/img/png/Comic_strip_final_3.png'; 


=======
import frontpagebanner from './../../static/img/png/front.png';
>>>>>>> d6ed69407996172c60bc656c1266cfdf938f8dcc

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
<<<<<<< HEAD
        
          <Image img={comicstrip} className={styles.featureImg} />
        
      
        
        <div className={styles.buttons}>
         <Link
              className="button button--info button--lg"
              to="/docs/Introduction">
              Read Intro 1st - 5min ⏱️
         </Link>
         <Link>.</Link>
         <Link
              className="button button--warning button--lg"
              to="/docs/Roadmap%20to%20DR">
              Get to the Roadmap
         </Link>
            
        </div>
        
=======
        <Link to="docs/Introduction">
          <Image img={frontpagebanner} className={styles.featureImg} />
        </Link>
        
  
         
>>>>>>> d6ed69407996172c60bc656c1266cfdf938f8dcc
      </div>
    
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
