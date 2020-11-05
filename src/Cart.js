import React, { useState } from 'react';
import ProductList from './ProductList'
import BillingForm from './BillingForm'
import { useHistory } from "react-router-dom";

  export default function Cart(props) {
    
    const { products, cart, onUpdateCart } = props

    const _products = products.filter ( p => p.id in cart )

    const [ billingStatus, setBillingStatus ] = useState ( 'notStarted' );

    let history = useHistory()

    const onBillingSuccess = (e) => {
      e.preventDefault();
      onUpdateCart ( null, 'removeAll' )
      setBillingStatus('notStarted')
      history.push("/");
    }

    console.log('render')

    const billingAmount = _products.reduce( ( acc, p ) => cart[p.id] * p.price + acc, 0 )

    return (
        <div>
            <h2>Cart</h2>
            { 
              _products.length <= 0 ? 
                <div> Your Cart Is Empty </div> :
                <div>
                  <ProductList products={_products} onUpdateCart={onUpdateCart} cart={cart} productView="cart" />
                  <div>Total Price = {billingAmount} </div>
                  { 
                    (billingStatus==='notStarted') 
                    ? <button onClick={()=>setBillingStatus('inProgress')} > Checkout </button> 
                    : (billingStatus==='inProgress') 
                      ? <BillingForm onSuccess={onBillingSuccess} billingAmount={billingAmount} /> 
                      :  null
                  }

                </div>
            }
        </div>
    )
  }
  
 