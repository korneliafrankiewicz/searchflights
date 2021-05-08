import React from 'react';
import '../styles/Header.scss';
import Logo from '../images/logo2.png'

function Header(props) { 
    return (
        <div className="header">
            <a href="./">
                <img id="logo" src={Logo} width="60px" alt="plane"/>
            </a>
            <a href="./">
                <h1 id="title">{props.title}</h1>
            </a>
        </div>
    )
}

export default Header;