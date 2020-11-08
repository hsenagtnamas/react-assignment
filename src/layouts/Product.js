import React from 'react';
import { Link } from "react-router-dom";

import CartOfASingleProduct from './CartOfASingleProduct'


export function Product ( { product, itemsInCart, onUpdateCart, readOnly = false } ) {

    const { id, image, title, price, description } = product

    return (
        <div className='row' >
            <div className='row' > <h3><Link to={`/${id}`} >{title}</Link></h3> </div>

            <div className='row' >
                <div className = 'col col-sm-4'>
                    <img className="img-fluid" src={image} alt="not available" />
                </div>

                <div className = 'col col-sm-8' >
                    <div className='row' >{ description } </div>
                    <div className='row' ><br /></div>
                    <div className='row' ><h3>$ {price}</h3></div>
                    <div className='row' ><br /></div>
                    <div className='row' ><br />
                        <CartOfASingleProduct value={ itemsInCart } onChange = { qty => onUpdateCart ( id, qty ) } readOnly = { readOnly } />
                    </div>
                    <div className='row' ><br /></div>
                </div>
            </div>

        </div>
    )
}