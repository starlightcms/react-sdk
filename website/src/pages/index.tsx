import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import styles from './index.module.scss'
import StarlightLogo from '@site/static/img/logo-complete.svg'

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroHeader}>
          <StarlightLogo />
          <div />
          <h3>React SDK</h3>
        </div>
        <h1 className={styles.heroTitle}>
          O SDK oficial do Starlight para aplicações React
        </h1>
        <div className={styles.heroDetails}>
          <code>
            <pre>npm i @starlightcms/react-sdk</pre>
          </code>
          <Link className="button button--primary" to="/docs/intro">
            Documentação
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Início | ${siteConfig.title}`}
      description={siteConfig.tagline}
      wrapperClassName={styles.mainWrapper}
    >
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  )
}
