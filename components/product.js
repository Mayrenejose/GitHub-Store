import Link from 'next/link'
import Image from "next/image"
import style from '../styles/product.module.css'
import { convertToPath } from '../lib/utils'
import AddButton from './addButton'

export default function Product({ item, showAs, qty }) {

    if (showAs === 'page') {
        return (
            <div className={style.page}>
                <div className={style.image}>
                    <Image
                        src={item.data.image}
                        alt={item.data.description}
                        width={600}
                        height={600}
                    />
                </div>

                <div className={style.info}>
                    <div>
                        <h2>{item.data.title}</h2>
                    </div>

                    <div className={style.price}>${item.data.price}</div>
                    <div>{item.data.description}</div>
                    <div>
                        <AddButton item={item} />
                    </div>
                </div>
            </div>
        )
    }

    if (showAs === 'listItem') {
        return <div className={style.lisItem}>
            <div>
                <Image
                    src={item.image}
                    alt={item.description}
                    width={100}
                    height={100}
                />
            </div>
            <div>
                <div><h3>{item.title}</h3></div>
                <div>{item.price}</div>
                {qty === 0 ? '' : <div>{qty} unidades</div>}
                {qty === 0 ? '' : <div>$ {qty * item.price}</div>}
            </div>
        </div>
    }

    return (
        <div className={style.item}>
            <div>
                <Link href={`/store/${convertToPath(item.title)}`}>
                    <a>
                        <Image
                            src={item.image}
                            alt={item.description}
                            width={500}
                            height={500}
                        />
                    </a>
                </Link>
            </div>

            <div>
                <h3>
                    <Link href={`/store/${convertToPath(item.title)}`}>
                        <a>{item.title}</a>
                    </Link>
                </h3>
            </div>

            <div>${item.price}</div>
            <div>
                <AddButton item={item} />
            </div>
        </div>
    )
}