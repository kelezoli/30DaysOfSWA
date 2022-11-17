import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Image from '@theme/IdealImage';
import comicstrip from '/img/png/Comic_strip_final_1.png'; 



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
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
              to="/docs/Switching%20to%20DR%20Education">
              Get to the Roadmap
         </Link>
            
        </div>
        
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
