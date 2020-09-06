import React from 'react'
import {AlertDiv} from './ErrorAlertStyles'

const ErrorAlert = ({children}) => {
    return (
        <AlertDiv>
        {children}
        </AlertDiv>
    )
}

export default ErrorAlert