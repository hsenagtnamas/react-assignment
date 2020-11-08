import React from 'react';

import QuantitySelector from './QuantitySelector'
import Button from '../common/Button'

export default function CartOfASingleProduct({ value, onChange, readOnly = false }) {

    return (
        <>
            { (value <= 0) ? null : <QuantitySelector min={1}  value={ value } onChange={ qty => onChange ( qty ) } readOnly={readOnly} />  }
            { (value > 0 ) ? null : <Button classNameExtra = "btn-success" onClick = { () => onChange ( value + 1 ) } readOnly={readOnly} text='Add To Cart' /> }
            { (value <=0 ) ? null : <Button classNameExtra = "btn-danger"  onClick = { () => onChange ( 0 ) } readOnly={readOnly} text = 'Remove from Cart' /> }
        </>
    )
}
