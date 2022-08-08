import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layaut from '../components/layaut'
import { getItemsLatest } from '../services/itenService'
import Product from '../components/product'
import styleProduct from '../styles/product.module.css'
import style from '../styles/Home.module.css'

export default function Home({ items }) {
  return (
    <Layaut title='Bienvenido'>
      <div className={style.banner}>
        <div className={style.bannerBackgraund}>
          <div className={style.bannerInfo}>
            <h2>Colección Verano 2022!!</h2>
            <p>Los artículos mas destacados de esta colección, estan Aquí!!</p>
          </div>
        </div>
      </div>

      <h3>Nuestros últimos productos</h3>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs='item' />
          ))
        }

      </div>
    </Layaut>
  )
}

export async function getStaticProps() {
  const res = await getItemsLatest();

  return {
    props: {
      items: res,
    }
  }
}