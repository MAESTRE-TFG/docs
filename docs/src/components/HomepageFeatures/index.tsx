import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Powered Education',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z"/>
        <path d="M16 10h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.5"/>
        <path d="M8 10H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h.5"/>
        <path d="M12 18v4"/>
        <path d="M16 18.5V22"/>
        <path d="M8 18.5V22"/>
      </svg>
    ),
    description: (
      <>
        MAESTRE leverages artificial intelligence to enhance the teaching experience,
        providing smart insights and automating administrative tasks.
      </>
    ),
  },
  {
    title: 'Comprehensive Classroom Management',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10v6"/>
        <path d="M6 12h12"/>
        <path d="M18 22V6a4 4 0 0 0-4-4H6"/>
      </svg>
    ),
    description: (
      <>
        Create and manage virtual classrooms, track student progress, and organize
        educational materials all in one integrated platform.
      </>
    ),
  },
  {
    title: 'Powerful Teaching Tools',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/>
        <rect width="16" height="12" x="4" y="8" rx="2"/>
        <path d="M2 14h2"/>
        <path d="M20 14h2"/>
        <path d="M15 13v2"/>
        <path d="M9 13v2"/>
      </svg>
    ),
    description: (
      <>
        Access specialized tools like the Class Planner and Exam Maker to streamline
        your workflow and focus on what matters most—teaching.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.featureIcon)}>
        {icon}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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