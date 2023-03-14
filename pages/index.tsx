import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '@/components/layout'
import utilStyles  from '../styles/utils.module.css'
import { getSortedPostsData } from '@/lib/posts'
import Date from '@/components/date'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}: any) {
  return (
    <Layout home>
      <Head>
        <title>Next First</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <ul className={utilStyles.list}>
          {
            allPostsData.map(({id, date, title}: any) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{ title }</Link>
                <br />
                <small className={ utilStyles.lightText }>
                  <Date dateString={date} />
                </small>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}
