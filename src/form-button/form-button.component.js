import React from 'react'
import './form-button.styles.scss'

function FormButton({children, isGoogleSigneIn, ...otherprops}) {
    return (
        <button className={ `${isGoogleSigneIn ? 'google-style' : ''} custom-button` } {...otherprops}>
            {children}
        </button>
    )
}

export default FormButton
