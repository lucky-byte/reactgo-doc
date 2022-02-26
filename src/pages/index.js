import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className='row'>
          <div className="col col--5">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg"
                to="/docs/intro">
                快速上手
              </Link>
              <Link className="button button--info button--lg margin-left--sm"
                href="https://reactgo-demo.kross.work" target='_blank'>
                演示
              </Link>
            </div>
            <p className={clsx('margin-top--xl', styles.secondary)}>
              如果你觉得 ReactGO 还不错，请打开
              <Link href='https://github.com/lucky-byte/reactgo' target='_blank'>
                项目主页
              </Link>
              给一个 Star &#127775;
            </p>
          </div>
          <div className="col col--7">
            <img src='/img/ReactGo-dark.png' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="ReactGo 文档">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
