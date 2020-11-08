import React from 'react';

import { Product } from './Product'
import { ProductInBrief } from './ProductInBrief'

    
export default function DisplayMultipleProducts ( { products, cart, onUpdateCart, view = 'normal', readOnly } ) {


    const layout = view === 'normal'  ? Product : ProductInBrief
    
    return (

        products.map ( product => {

            const itemsInCart = ( product.id in cart ) ? cart[ product.id ] : 0

            const key = 'product-' + product.id

            return <div key={key}> { layout ( { key, itemsInCart, onUpdateCart, readOnly, product, cart, } ) } </div>
        })
    )


}
