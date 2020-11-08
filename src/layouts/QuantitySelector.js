import React from 'react';

export default function QuantitySelector(props) {

    const { value, onChange, readOnly = false } = props

    return(
        <>
            <button disabled={readOnly || (value <= 1)} className="btn btn-primary" onClick = { () => onChange ( value - 1 ) } >-</button> 
            
            <button type="button" disabled={readOnly} className="btn btn-default">Quantity {value}</button>

            { value < 1 ? null : <button disabled={readOnly} className="btn btn-primary" onClick = { () => onChange ( value + 1) } >+</button>  }

        </>
    )
}
