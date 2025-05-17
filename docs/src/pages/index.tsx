import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoContainer}>
          <img src="maestre_logo_white_transparent.webp" alt="MAESTRE Logo" className={styles.logo} />
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/user-manual/introduction">
            User Manual
          </Link>
          <Link
            className="button button--lg button--secondary button--outlined"
            to="/docs/admin-manual/introduction">
            Admin Manual
          </Link>
        </div>
      </div>
      <div className={styles.waveContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className={styles.wave}>
          <path d="M0,32L80,48C160,64,320,96,480,96C640,96,800,64,960,48C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="MAESTRE - AI-powered platform for teachers and educational institutions">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}