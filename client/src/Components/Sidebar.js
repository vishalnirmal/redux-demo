import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import {useSelector} from 'react-redux';

function Sidebar({show, click}) {
    const classes = ["sidebar"];
    if (show){
        classes.push("show");
    }
    const cart = useSelector(state=>state.cart);
    const {cartItems} = cart;
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }
    return (

        <div className={classes.join(" ")}>
            <ul className="sidebar__links" onClick={()=>click()}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="sidebar__cartbadge">
                            {getCartCount()}
                            </span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                            Shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
