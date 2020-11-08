import React from 'react';

import DisplayMultipleProducts from './layouts/DisplayMultipleProducts'

export default function Products({ products, cart, routeProps, onUpdateCart }) {
  
  const selectedProductId = routeProps ? routeProps.match.params.selectedProductId : null

  const _products = selectedProductId ? products.filter ( p => String(p.id) === String(selectedProductId) )  : products

  return (
    <DisplayMultipleProducts  products = { _products } onUpdateCart = {onUpdateCart} cart={cart} /> 
  )
}
  