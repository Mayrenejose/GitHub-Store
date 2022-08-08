import Layaut from "../../components/layaut"
import Product from "../../components/product"
import { getPathsFromIds, getItemData } from "../../lib/utils";


export default function ProductPage({productInfo}) {
    console.log(productInfo);
    return (
        <Layaut>
            <Product item= {productInfo} showAs='page' />
        </Layaut>
    )
}

export async function getStaticPaths() {
    const paths = await getPathsFromIds();

    return {
        paths: paths,
        fallback: false

    };
}

export async function getStaticProps({ params }) {
    const id = params.id;
    const product = await getItemData(id);

    return {
        props: {
            productInfo: product,
        },
    };
}
