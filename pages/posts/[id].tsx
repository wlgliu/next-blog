import Date from "@/components/date"
import Layout from "@/components/layout"
import { getAllPostIds, getPostData } from "@/lib/posts"
import Head from "next/head"
import utilStyles from '@/styles/utils.module.css'

const Post = ({ postData } : any) => {
    return <Layout home={false}>
        <Head>
            <title>{ postData.title }</title>
        </Head>

        <article>
            <h1 className={utilStyles.headingXl}>{ postData.title }</h1>
            <br />
            <div className={utilStyles.lightText}>
                <Date dateString={ postData.date } />
            </div>
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
        </article>
    </Layout>
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params } : any) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}

export default Post