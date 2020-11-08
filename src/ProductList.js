import React from 'react';
import Product from './Product'
import QuantitySelector from './QuantitySelector'

function ProductRow(props){

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

export default function ProductList (props){

    const { products, selectedProductId, onUpdateCart, cart, productView } = props

    const _products =  selectedProductId ? products.filter ( p => String(p.id) === String(selectedProductId) ) : products

    const _productView = selectedProductId ? 'detailed' : productView
    
    return (
        <div className='row'>
            {
                _products.map( product => <ProductRow key={'product-' + product.id } product={product} onUpdateCart={onUpdateCart} cart={cart} productView={_productView} /> )
            }
        </div>
      )
}

