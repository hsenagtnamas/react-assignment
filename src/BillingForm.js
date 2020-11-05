import React from 'react';
 
export default function BillingForm(props) {
    
    const { billingAmount, onSuccess } = props

    return (
        <form onSubmit={onSuccess}>
            <h2>Billing Form</h2>
            <label> Total Amount : {billingAmount} </label>
            <input type="submit" value="Submit" />
        </form>
    )
  }
  
 