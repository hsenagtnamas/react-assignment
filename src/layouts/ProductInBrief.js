import React from 'react';
import { Link } from "react-router-dom";

import CartOfASingleProductInBrief from './CartOfASingleProductInBrief'

export function ProductInBrief ( { product, itemsInCart, onUpdateCart, readOnly = false } ) {

    const { id, image, title, price } = product
    
    return (

        <div className='row' >
            <div className = 'col col-sm-1'>
                <img className="img-fluid" src={image} alt="not available" />
            </div>

            <div className = 'col col-sm-7' >
                <div className='row' ><Link to={`/${id}`} >{title}</Link></div>
            </div>

            <div className = 'col col-sm-3'>
                <CartOfASingleProductInBrief value={ itemsInCart } onChange = { qty => onUpdateCart ( id, qty ) } readOnly = { readOnly } />
            </div>
            <div className = 'col col-sm-1'>
                <h4>{price}</h4>
            </div>
        </div>

    )
}