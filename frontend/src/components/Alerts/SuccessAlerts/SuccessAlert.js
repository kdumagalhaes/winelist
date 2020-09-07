import React from 'react'
import {SuccessAlertDiv} from './SuccessAlertStyles'

const SuccessAlert = ({children}) => {
    return (
        <SuccessAlertDiv>
            {children}
        </SuccessAlertDiv>
    )
}

export default SuccessAlert