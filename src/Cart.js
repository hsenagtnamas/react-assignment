import React, { useState } from 'react';
import DisplayMultipleProducts from './layouts/DisplayMultipleProducts'
import { useHistory } from "react-router-dom";
import BillingForm from './BillingForm'

export default function Cart( { products, cart, onUpdateCart } ) {

    const _products = products.filter ( p => ( ( p.id in cart ) && ( cart[ p.id ] > 0 ) ) )

    const [ billingStatus, setBillingStatus ] = useState ( 'notStarted' );
    
    let history = useHistory()

    const onBillingSuccess = () => {
      onUpdateCart ( '*', 0 )
      history.push("/");
    }

    const billingAmount = _products.reduce( ( acc, p ) => Math.round ( ( cart[ p.id ] * p.price + acc + Number.EPSILON ) * 100) / 100, 0 )

    return (
        <>
            <h2>Cart</h2>
            { 
                _products.length <= 0 
                    ? <> Your Cart Is Empty </> 
                    : <>
                        <DisplayMultipleProducts  products = { _products } onUpdateCart = {onUpdateCart} cart = { cart } view = 'cart' readOnly = { billingStatus === 'inProgress' } /> 
                        <div className='row' ><br /></div>
                        <div className='row' >
                            <div className = 'col col-sm-11'>
                                <h4>Total Amount : </h4>
                            </div>
                            <div className = 'col col-sm-1'>
                                <h4>{billingAmount}</h4>
                            </div>
                        </div>
                        { 
                            billingStatus === 'notStarted'
                                ? <button onClick = { () => setBillingStatus ( 'inProgress' ) } > Checkout </button> 
                                : billingStatus==='inProgress' 
                                    ? <BillingForm onSuccess={onBillingSuccess} billingAmount = { billingAmount } onCancel = { () => setBillingStatus( 'notStarted' ) } /> 
                                    :  null
                        }
                    </>
            }
        </>
    )

}