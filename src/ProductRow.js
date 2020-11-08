import React from 'react';
import Product from './Product'
import QuantitySelector from './QuantitySelector'

export default function ProductRow(props){

    const { product, cart, onUpdateCart, productView } = props

    return (
        <div className='row'>
            <div className='row'>
                 <Product {...product} view={productView} />
            </div>
            <div className='row' >
                { (product.id in cart) ? <QuantitySelector min={1}  value={ cart[product.id] } onChange={ qty => onUpdateCart ( product.id, 'set', qty ) } /> : null }

                { (product.id in cart) ? null : <button className="btn btn-success" type="button" onClick = { () => onUpdateCart(product.id, 'increment', 1 ) } >Add To Cart</button> }
                { (product.id in cart) ? <button className="btn btn-danger" type="button" onClick = { () => onUpdateCart(product.id, 'set', 0) } >Remove from Cart</button> : null }
            </div>
            <div className='row' ><br /></div>
        </div>
    )
}