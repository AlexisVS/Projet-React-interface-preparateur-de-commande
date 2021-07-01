import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/client">Interface client</Link>
                    <Link to="/preparator">Interface preparateur</Link>
                    <Link to="/about">A propos</Link>
                </nav>
            </header>
        );
    }
}

export default Header;