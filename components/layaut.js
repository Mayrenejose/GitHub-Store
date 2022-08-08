import Head from 'next/head'
import style from '../styles/layaut.module.css' 
import Menu from './menu'
import ShoppingCart from './shoppingCart'

export default function Layaut({ children, title }) {
    return (
        <div>
            <Head>
                <title>Github Merch {title? `| ${title}` : ''}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />

            <div className={style.container}>{children}</div>
            <ShoppingCart />
        </div>
    )
}