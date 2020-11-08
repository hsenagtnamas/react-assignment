import React, { useEffect, useState } from 'react';
import InputText from './common/InputText'
    
export default function BillingForm(props) {
    
    const { billingAmount, onSuccess, onCancel } = props

    let [ isInputOk, setInputOk ]= useState ( false )
    let [ name, setName ]= useState ( '' )
    let [ email, setEmail ]= useState ( '' )
    let [ phone, setPhone ]= useState ( '' )
    let [ creditCardNumber, setCreditCardNumber ]= useState ( '' )
    let [ formSubmittedSuccessfully, setFormSubmittedSuccessfully ]= useState ( false )

    let [ nameIsValid, setNameIsValid ]= useState ( false )
    let [ emailIsValid, setEmailIsValid ]= useState ( false )
    let [ phoneIsValid, setPhoneIsValid ]= useState ( false )
    let [ creditCardNumberIsValid, setCreditCardNumberIsValid ]= useState ( false )


    useEffect(() => {

        const re = /^[A-Za-z]+\s[A-Za-z]+$/

        setNameIsValid ( re.test(String(name) ))

    }, [name] )

    useEffect(() => {
        
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        setEmailIsValid ( re.test(String(email).toLowerCase()) )

    }, [email] )

    useEffect(() => {
        
        const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im

        setPhoneIsValid ( re.test(String(phone) ) )

    }, [phone] )

    useEffect(() => {
        
        const re = /^\d{16}$/

        setCreditCardNumberIsValid ( re.test(String(creditCardNumber) ) )

    }, [creditCardNumber] )


    useEffect(() => {

        setInputOk ( nameIsValid && emailIsValid && phoneIsValid && creditCardNumberIsValid  )

    }, [ nameIsValid, emailIsValid, phoneIsValid, creditCardNumberIsValid ]);


    useEffect(() => {

        if (!formSubmittedSuccessfully)
            return

        const timer = setTimeout( () => onSuccess(), 2000 )
          
        return () => clearTimeout(timer);

    }, [formSubmittedSuccessfully, onSuccess] )


    const _onSubmit = (e) => {
        e.preventDefault();
        setFormSubmittedSuccessfully ( true )   
    }

    return (
        formSubmittedSuccessfully ?
        <h1>Payment successful</h1> :
        <form onSubmit={_onSubmit}>
            <h2>Billing Form</h2>
            <InputText label="Name" name="name" value = {name} onChange={setName} isValid={nameIsValid} helpText='Please enter your name' />
            <InputText label="Email" name="email" value = {email} onChange={setEmail} isValid={emailIsValid} helpText='Please enter your email' />
            <InputText label="Phone" name="phone" value = {phone} onChange={setPhone} isValid={phoneIsValid} helpText='Please enter 10 digit phone number'/>
            <InputText label="Credit Card Number" name="creditCardNumber" value = {creditCardNumber} onChange={setCreditCardNumber} isValid={creditCardNumberIsValid} helpText='Please enter 16 digit Number' />

            <label> Total Amount : {billingAmount} </label><br/>
            <input type="submit" value="Submit" disabled={!isInputOk} /><br/>
            <button className="btn btn-danger" onClick = { (e) => { e.preventDefault(); onCancel() } }>Cancel</button>
        </form>
    )
  }
