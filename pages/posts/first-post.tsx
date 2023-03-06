import Layout from "@/components/layout"
import Head from "next/head"
import Link from "next/link"

const FirstPost = () => {
    return <>
        <Layout home={false}>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First post</h1>
            <h2>
                <Link href='/'>Back to home</Link>
            </h2>
        </Layout>
    </>
}

export default FirstPost