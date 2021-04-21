import Head from 'next/head'
import Layout from '../src/components/layout'
import Cards from '../src/components/cards';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    /*
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    */
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cards/>
    </Layout>
  )
}
