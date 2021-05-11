import React from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css";

import {useSelector} from 'react-redux';


function Navbar({click}) {
    const cart = useSelector(state=>state.cart);
    const {cartItems} = cart;
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }
    return (
        <nav className="navbar">
            <Link to="/" className="link">
                <div className="navbar__logo">
                    <h2>Shopping Cart</h2>
                </div>
            </Link>
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo__badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>

            <div className="hamburger__menu" onClick={()=>click()}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    )
}

export default Navbar;
