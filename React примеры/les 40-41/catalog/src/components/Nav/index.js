import { Link, Outlet } from "react-router-dom"
import CartWidget from "../../pages/Cart/components/CartWidget";
import style from './Nav.module.css';

const Nav = () => {
    return (
        <>
        <header className={style.container}>
            <div className={style.logo}>
                <img src="https://via.placeholder.com/200x50" alt="#" />
            </div>
            <nav className={style.nav__container}>
                <ul className={style.nav}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/catalog'}>Catalog</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
        <Outlet/>
        </>
    )
}

export default Nav;