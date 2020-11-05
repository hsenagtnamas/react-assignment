import React, { useState, useEffect } from 'react';
import Product from './Product'

export default function ProductList (props){

    const { products, selectedProductId, onUpdateCart } = props

    const _products =  selectedProductId ? products.filter ( p => p.id == selectedProductId ) : products
    
    return (
        <div>
          <table>
            <tbody>
                {
                    _products.map( (product,index) => (
                        <tr key={'product-' + product.id } >
                            <td>
                                <Product {...product}  />
                            </td>
                            <td>
                                <input type="number" min="0" step="1" max="10" onClick = { (elem) => onUpdateCart ( product.id, 'set', elem.target.value )} />
                                <button type="button" onClick = { () => onUpdateCart(product.id, 'increment', 1 ) } >Add To Cart</button><br/>
                                <button type="button" onClick = { () => onUpdateCart(product.id, 'decrement', 1) } >Remove from Cart</button><br/>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
          </table>
        </div>
      )
}

