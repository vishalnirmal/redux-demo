import React from 'react';
import './ProductScreen.css';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getProductDetails as listProductDetails} from '../redux/actions/productActions';
import {addToCart} from '../redux/actions/cartActions';

function ProductScreen({match, history}) {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const getProductDetails = useSelector(state=>state.getProductDetails);
    const {product, loading, error} = getProductDetails;

    useEffect(()=>{
        if (product && match.params.id !== product._id){
            dispatch(listProductDetails(match.params.id));
        }
    }, [product, match, dispatch]);

    const addToCartHandler = ()=>{
        dispatch(addToCart(product._id, qty));
        history.push("/cart");
    }

    // let name= "PlayStation 5",imageUrl="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",description="PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",price= 499,countInStock= 15;
    return (
        <div className="productscreen">
        {
            loading ? 
            (<h2>Loading....</h2>) :
            error ?
            (<h2>{error}</h2>) : 
            (
                <>
                        <div className="productscreen__left">
                        <div className="left__image">
                            <img src={product.imageUrl} alt={product.name}/>
                        </div>
                        <div className="left__info">
                            <p className="left__name">{product.name}</p>
                            <p>$ {product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="productscreen__right">
                        <div className="right__info">
                            <p>
                                Price:
                                <span>${product.price}</span>
                            </p>
                            <p>
                                Status:
                                <span>
                                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                </span>
                            </p>
                            <p>
                                Qty
                                <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                                    {
                                        [...Array(product.countInStock).keys()].map(x=>(
                                            <option key={x+1} value={x+1}>{x+1}</option>
                                        ))
                                    }
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>
                                Add To Cart
                                </button>
                            </p>
                        </div>
                    </div>
                </>
            )
        }
        </div>
    )
}

export default ProductScreen
