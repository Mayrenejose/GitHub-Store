import Layaut from "../../components/layaut";
import { getItems } from "../../services/itenService"
import Product from "../../components/product";
import Image from "next/image";
import styleItems from '../../styles/product.module.css'

export default function Index({ items }) {
    return (
        <Layaut>           
            <div className={styleItems.items}>
                {items && items.map(iten =>
                    <Product key={iten.id} item={iten} showAs='default' />

                )}
            </div>
        </Layaut>
    )
}

export async function getStaticProps() {
    const res = await getItems();

    return {
        props: {
            items: res,
        },
    };
}