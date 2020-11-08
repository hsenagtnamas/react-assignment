import React, { useState, useEffect } from 'react';

import { DisplayMultipleProducts } from './ProductDisplayLayouts'

export default function ProductList({ products, cart, routeProps, onUpdateCart }) {
  
  const selectedProductId = routeProps ? routeProps.match.params.selectedProductId : null

  const _products = selectedProductId ? products.filter ( p => String(p.id) === String(selectedProductId) )  : products

    return (
      <DisplayMultipleProducts  products = { _products } onUpdateCart = {onUpdateCart} cart={cart} /> 
    )
  }
  