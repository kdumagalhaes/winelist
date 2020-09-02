import React from 'react'
import {LogoH1} from './LogoStyles'
import LogoImg from '../../assets/LOGO.svg'

const Logo = ({padding}) => {
    return (
        <LogoH1 padding={padding}>
            <a href='/'>
            WineList
            <img src={LogoImg} alt="logo winelist" />
            </a>
        </LogoH1>
    )
}

export default Logo