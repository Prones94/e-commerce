import React from 'react'

import './Button.styles.scss'

const Button = ({children,isGoogleSignIn, inverted, ...otherProps }) => (
  <button className={`${inverted? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in': ''} button__custom`} {...otherProps}>
    {children}
  </button>
)


export default Button