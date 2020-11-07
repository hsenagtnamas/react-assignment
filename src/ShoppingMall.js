import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProductList from './ProductList'
import Cart from './Cart'


export default function ShoppingMall() {

    const [ products, setProducts ] = useState ( [] );
    
    const [ cart, setCart ] = useState ( () => {
        const persistedCart = window.localStorage.getItem('cart');
        return persistedCart !== null
          ? JSON.parse(persistedCart)
          : {};
    });
    

    useEffect(() => {

        window.localStorage.setItem( 'cart', JSON.stringify(cart));

    }, [cart]);


    const [ error, setError ] = useState ( '' );
    const [ isResultAvailable, setIsResultAvailable ] = useState ( false );
  
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
  
    function onUpdateCart ( productId, operation, value = 1 ) {

        if ( operation === 'increment' ){

            let _cart = { ...cart }
            _cart[ productId ] = ( productId in cart ) ? cart[ productId ] + 1 : 1
            setCart ( _cart )

        }else if ( operation === 'decrement' ){

            let _cart = { ...cart }
        
            if ( productId in cart ){
                
                _cart[ productId ] -=  1

                if ( _cart[ productId ] <= 0 )
                    delete _cart[ productId ]
            
                setCart ( _cart )
            }

        }else if ( operation === 'set' ){

            let _cart = { ...cart }
            _cart[ productId ] = value
            if ( _cart[ productId ] <= 0 )
                delete _cart[ productId ]

            setCart ( _cart )

        }else if ( operation === 'removeAll' ) {

            setCart([])
        }
    }

  
    return (
        (!isResultAvailable) ? <div>Waiting for API Response</div> : error ? error :
        <Router>

            <div>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart  {Object.keys(cart).length} </Link>
                        </li>
                        
                    </ul>
                </nav>

                <Switch>

                    <Route path="/cart">
                        <Cart products={products} onUpdateCart={onUpdateCart} cart={cart} />
                    </Route>

                    <Route path="/:selectedProductId?" render={(props) => <ProductList products={products} selectedProductId={props.match.params.selectedProductId} onUpdateCart={onUpdateCart} cart={cart} /> }  />

                </Switch>

            </div>
            
        </Router>
    );
  }
  