import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className='row'>
          <div className="col col--5">
            <h1 className={clsx("hero__title", styles.title)}>REACT + GO</h1>
            <img className={styles.logo} alt='React'
              src='https://cdn.worldvectorlogo.com/logos/react-2.svg'
            />
            <img className={styles.logo} alt='Go'
              src='https://ucarecdn.com/157c4486-7979-4103-a59b-8be08b54a84a/'
            />
            <p className={clsx("hero__subtitle", styles.subtitle)}>
              快速交付你的下一个优质项目
            </p>
            <div className={styles.buttons}>
              <Link className="button button--info button--lg"
                to="/docs/intro">
                快速上手
              </Link>
              <div className='margin--sm' />
              <Link className="button button--secondary button--lg"
                href="http://reactgo.lucky-byte.net:23890" target='_blank'>
                演示
                <span style={{ fontSize: 'small', marginLeft: 10 }}>
                  账号密码 <span style={{ color: 'orangered' }}>reactgo</span>
                </span>
              </Link>
            </div>

            <img className={styles.ukr} alt='UKR'
              src='http://spectrum.itrealms.com/wp-content/uploads/2014/07/stop_war_in_ukraine.jpg'
            />
            <img className={styles.ukr} alt='UKR' src='/img/ukr.png' />
            <a href='https://www.youtube.com/watch?v=zV_MiQrqrlk' target='_blank'>
              <img className={styles.ukr} alt='UKR' src='/img/ukr.jpg' />
            </a>

            <p className={clsx('margin-top--xl', styles.secondary)}>
              如果你觉得 ReactGO 还不错，请到
              <Link href='https://github.com/lucky-byte/reactgo' target='_blank'>
                项目主页
              </Link>
              给一个 Star &#127775;
            </p>
            <p style={{color: '#bbb', fontSize:'small'}}>
              文档错误及建议请在
              <Link href='https://github.com/lucky-byte/reactgo-doc' target='_blank'>
                文档仓库
              </Link>
              中提交 Issues.
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
