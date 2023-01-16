import React from 'react';
import Logo from '../../assets/img/logo.png';

const Header = () => {
    return (
        <header className="container">
            <img src={Logo} alt="logo" />
            <nav>
                <a href="#">Startseite</a>
                <a href="#">Seite 1</a>
            </nav>
        </header>
    )
}

export default Header