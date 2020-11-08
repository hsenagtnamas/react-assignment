import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from './Cart'
import Products from './Products'

export default function Home(props){

    const [ products, setProducts ] = useState ( [] );
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
        
    }, []);
    
    
    const [ cart, setCart ] = useState ( () => {
        const persistedCart = window.localStorage.getItem('cart');
        return persistedCart ? JSON.parse(persistedCart) : {};
    });

    useEffect(() => window.localStorage.setItem( 'cart', JSON.stringify(cart)), [cart]);

    const onUpdateCart = ( productId, value ) => setCart ( productId === '*' ? [] : { ...cart, [productId] : value } )

    const productsInCart = Object.values(cart).filter( v => v > 0 ).length

    return (

        <div className='container'>
            <Router>
              <div className='row' >
                <div className = 'col col-sm-8'>
                  <h3><Link to="/">Home</Link></h3>
                </div>
                <div className = 'col col-sm-4'>
                  <h3><Link to="/cart">Cart </Link> { productsInCart <= 0 ? null : <span className="badge badge-dark"> {productsInCart} </span> } </h3>
                </div>
              </div>
              <Switch>
                  <Route path="/cart">
                      <Cart products={products} cart = { cart } onUpdateCart = { onUpdateCart } />
                  </Route>
                  <Route path="/:selectedProductId?" render = { ( props ) => <Products products={products} routeProps = { props } cart = { cart } onUpdateCart = { onUpdateCart } setProducts = {setProducts}/> }  />
                </Switch>
            </Router>
        </div>
    );
  }
  