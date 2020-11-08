import React from 'react';
import { Link } from "react-router-dom";
import QuantitySelector from './QuantitySelector'

export function ProductImage(props){

    const { image } = props

    return (
        <img className="img-fluid" src={image} alt="not available" />
    )
}

export function ProductTitle ( { id, title } ) {
    return ( <Link to={`/${id}`} >{title}</Link> )
}
    
export function CartOfASingleProduct({ value, onChange, readOnly = false }) {

    return (
        <>
            { (value <= 0) ? null : <QuantitySelector min={1}  value={ value } onChange={ qty => onChange ( qty ) } readonly={readOnly} />  }
            { (value > 0 ) ? null : <button className="btn btn-success" type="button" onClick = { () => onChange ( value + 1 ) } disabled={readOnly} >Add To Cart</button> }
            { (value <=0 ) ? null : <button className="btn btn-danger"  type="button" onClick = { () => onChange ( 0 ) } disabled={readOnly} >Remove from Cart</button> }
        </>
    )
}