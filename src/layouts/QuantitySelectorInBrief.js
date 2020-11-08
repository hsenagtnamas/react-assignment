import React from 'react';

export default function QuantitySelectorInBrief ( { value, onChange, readOnly = false } ) {

    return(
        <h4>
            <span onClick = { () => readOnly ? null : onChange ( value - 1 ) } > - </span> 
            
            {value}

            <span onClick = { () => readOnly ? null : onChange ( value + 1) } > + </span>

            <span onClick = { () => readOnly ? null : onChange ( 0 ) } > (x) </span>

        </h4>
    )
}

