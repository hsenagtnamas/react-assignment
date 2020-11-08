import React from 'react';

export default function QuantitySelector(props) {

    const { value, onChange, readOnly = false } = props

    return(
        <>
            <button disabled={readOnly || (value <= 1)} className="btn btn-primary" onClick = { () => onChange ( value - 1 ) } >-</button> 
            
            <button type="button" disabled={readOnly} className="btn btn-default">Quantity <span class="badge">{value}</span></button>

            { value < 1 ? null : <button disabled={readOnly} className="btn btn-primary" onClick = { () => onChange ( value + 1) } >+</button>  }

        </>
    )
}

export function QuantitySelectorInBrief ( { value, onChange, readOnly = false } ) {

    return(
        <h4>
            <span disabled={readOnly || (value <= 1)} onClick = { () => readOnly ? null : onChange ( value - 1 ) } > - </span> 
            
            {value}

            <span disabled={readOnly} onClick = { () => readOnly ? null : onChange ( value + 1) } > + </span>

        </h4>
    )
}

