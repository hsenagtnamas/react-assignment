import React from 'react';
import Product from './Product'


function ProductRow(props){

    const { product, cart, onUpdateCart, productView } = props

    return (
        <tr  >
            <td>
                <Product {...product} view={productView} />
                { (product.id in cart) ? <input type="number" min="1" step="1" max="100" value={ cart[product.id] } onChange = { elem => onUpdateCart ( product.id, 'set', parseInt(elem.target.value) ) } /> : null }
                { (product.id in cart) ? null : <button type="button" onClick = { () => onUpdateCart(product.id, 'increment', 1 ) } >Add To Cart</button> }
                { (product.id in cart) ? <button type="button" onClick = { () => onUpdateCart(product.id, 'set', 0) } >Remove from Cart</button> : null }
            </td>
        </tr>

    )
}

export default function ProductList (props){

    const { products, selectedProductId, onUpdateCart, cart, productView } = props

    const _products =  selectedProductId ? products.filter ( p => p.id == selectedProductId ) : products

    const _productView = selectedProductId ? 'detailed' : productView
    
    return (
        <div>
          <table>
            <tbody>
                {
                    _products.map( product => <ProductRow key={'product-' + product.id } product={product} onUpdateCart={onUpdateCart} cart={cart} productView={_productView} /> )
                }
            </tbody>
          </table>
        </div>
      )
}

