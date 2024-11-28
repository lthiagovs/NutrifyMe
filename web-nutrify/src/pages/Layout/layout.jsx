import React from 'react';
import "./style.css";

const Layout = ({ children }) => {
    return(
    <header class="header">
        <nav class="navbar">
            <ul>
                <li><a href="#" class="nav-link">Home</a></li>
                <li><a href="#" class="nav-link">Sobre</a></li>
                <li><a href="#" class="nav-link">Contato</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;