import React from 'react';

export default function Button ({ value, onClick, readOnly = false, classNameExtra = '', text }) {

    return (
        <button className = { "btn " + classNameExtra }  type="button" onClick = { onClick } disabled = { readOnly } > {text} </button>
    )
}
