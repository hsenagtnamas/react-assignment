import React from 'react';
import { ProductImage, ProductTitle, CartOfASingleProduct } from './ProductFieldsDisplayHelpers'
import { QuantitySelectorInBrief } from './QuantitySelector'

export function DisplaySingleProduct ( { product, itemsInCart, onUpdateCart, readOnly = false } ) {

    const { id, image, title, description } = product

    return (
        <div className='row' >
            <div className='row' > <h3><ProductTitle {...product} /></h3> </div>

            <div className='row' >
                <div className = 'col col-sm-4'>
                    <ProductImage {...product} />
                </div>

                <div className = 'col col-sm-8' >
                    <div className='row' >{ description } </div>
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

export function DisplaySingleProductCartView ( { product, itemsInCart, onUpdateCart, readOnly = false } ) {

    const { id, image, title, price } = product
    
    return (

        <div className='row' >
            <div className = 'col col-sm-1'>
                <ProductImage {...product} />
            </div>

            <div className = 'col col-sm-7' >
                <div className='row' ><ProductTitle {...product} /></div>
            </div>

            <div className = 'col col-sm-3'>
                <QuantitySelectorInBrief min={1}  value={ itemsInCart }  onChange = { qty => onUpdateCart ( id, qty ) } readOnly={readOnly} />
            </div>
            <div className = 'col col-sm-1'>
                <h4>{price}</h4>
            </div>
        </div>

    )
}
    
export function DisplayMultipleProducts ( { products, cart, onUpdateCart, view = 'normal', readOnly } ) {


    return (
        view === 'normal' 
        ? products.map ( p => <DisplaySingleProduct key = { 'product-' + p.id } product={p} itemsInCart={ ( p.id in cart ) ? cart [ p.id ] : null } onUpdateCart={onUpdateCart} readOnly={readOnly} /> )
        : products.map ( p => <DisplaySingleProductCartView key = { 'product-' + p.id } product={p} itemsInCart={ ( p.id in cart ) ? cart [ p.id ] : null } onUpdateCart={onUpdateCart}  readOnly={readOnly} /> )
    )
}
