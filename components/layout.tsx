import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Leon Wang'
export const siteTitle = 'Next.js Sample Website'

const Layout = ({ children, home } : any) => {
    return <div className={styles.container}>
        <header className={styles.header}>
            {
                home 
                ? <>
                    <Image priority src='/images/profile.jpeg' className={utilStyles.borderCircle} height={114} width={114} alt=''  />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
                : <>
                     <Link href="/">
                        <Image
                            priority
                            src="/images/profile.jpeg"
                            className={utilStyles.borderCircle}
                            height={108}
                            width={108}
                            alt=""
                        />
                    </Link>
                    <h5 className={utilStyles.headingLg}>
                        <Link href="/" className={utilStyles.colorInherit}>
                            {name}
                        </Link>
                    </h5>
                </>
            }
        </header>

        <main>{ children }</main>

        {
            !home && <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
            </div>
        }
    </div>
}

export default Layout