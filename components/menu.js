import Link from "next/link";
import style from '../styles/menu.module.css'
import { useAppContext } from "./stateWrapper";


export default function Menu() {

    const cart = useAppContext();

    function handleOpenCart() {
        cart.openCart();

    }

    return (
        <nav className={style.menu}>
            <div>
                <Link href='/'>
                    <a className={style.link}>Inicio</a>
                </Link>
                <Link href='/store'>
                    <a className={style.link}>Tienda</a>
                </Link>
                <Link href='/fak'>
                    <a className={style.link}>Preguntas Frecuentes</a>
                </Link>
            </div>

            <div>
                <a href='#' className={style.link} onClick={handleOpenCart}>
                    Carrito ({cart.getNumberOfItems()})
                </a>
            </div>
        </nav>
    )
}