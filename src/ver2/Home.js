import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from './Cart'
import Products from './Products'

export default function Home(props){

    const [ products, setProducts ] = useState ( [] );
    const [ error, setError ] = useState ( '' );
    const [ isResultAvailable, setIsResultAvailable ] = useState ( false );
    
    const [ cart, setCart ] = useState ( () => {
        const persistedCart = window.localStorage.getItem('cart');
        return persistedCart ? JSON.parse(persistedCart) : {};
    });
    

    useEffect(() => window.localStorage.setItem( 'cart', JSON.stringify(cart)), [cart]);

    useEffect ( () => {
        
      const url = 'https://fakestoreapi.com/products'
  
        fetch( url )
        .then( res => res.json() )
        .then( res => { 
  
          setIsResultAvailable(true)
          
          if ( !res ){
            setError('No response found for URL : ' + url )
            setProducts([])
          }else{
            setError('')
            setProducts(res)
          }

        }, (e) => {
            setError(String( 'Got Error response : ' + e)) 
            setIsResultAvailable(true)
          }
          
        )
  
        .catch((e) => setError('Got Error : ' + e) )
        
    }, []);

    function onUpdateCart ( productId, value ) {
       
        setCart ( productId === '*' ? [] : { ...cart, [productId] : value } )
    }

    const productsInCart = Object.values(cart).filter( v => v > 0 ).length

    return (

        (!isResultAvailable) ? <div>Please wait...</div> : error ? error :

        <div className='container'>
            <Router>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/cart">Cart </Link> { productsInCart <= 0 ? null : <span className="badge badge-dark"> {productsInCart} </span> } </li>
                        
                        </ul>
                    </div>
                </nav>

                <Switch>

                    <Route path="/cart">
                        <Cart products={products} cart = { cart } onUpdateCart = { onUpdateCart } />
                    </Route>

                    <Route path="/:selectedProductId?" render = { ( props ) => <Products products={products} routeProps = { props } cart = { cart } onUpdateCart = { onUpdateCart } /> }  />

                    </Switch>
            </Router>
        </div>
    );
  }
  