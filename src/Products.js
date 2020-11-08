import React, { useEffect } from 'react';

import DisplayMultipleProducts from './layouts/DisplayMultipleProducts'

export default function Products({ products, cart, routeProps, onUpdateCart, setProducts }) {
  
  useEffect ( () => {
      
    const url = 'https://fakestoreapi.com/products'

      fetch( url )
      .then( res => res.json() )
      .then( res => {
        res ? setProducts(res) : console.log ( res ) 
      }, (e) => {
          console.log ( String ( 'Got Error response : ' + e ) ) 
      } )

      .catch((e) => console.log ( String ( 'Got Error : ' + e ) )) 
      
  }, [ products, setProducts ]);

  const selectedProductId = routeProps ? routeProps.match.params.selectedProductId : null

  const _products = selectedProductId ? products.filter ( p => String(p.id) === String(selectedProductId) )  : products

  return (
    <DisplayMultipleProducts  products = { _products } onUpdateCart = {onUpdateCart} cart={cart} /> 
  )
}
  