import React from 'react';

import QuantitySelectorInBrief from './QuantitySelectorInBrief'

export default function CartOfASingleProductInBrief({ value, onChange, readOnly = false }) {

    return (
        <QuantitySelectorInBrief value={ value } onChange={ qty => onChange ( qty ) } readOnly={readOnly} />
    )
}