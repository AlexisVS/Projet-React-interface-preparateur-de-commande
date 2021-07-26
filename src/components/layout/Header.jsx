import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render () {
        return (
            <header className="header">
                <nav className="header-nav">
                    <Link className="" to="/home"><i className="fas fa-home"></i> <span>Accueil</span></Link>
                    <Link className="" to="/"><i className="fas fa-user"></i><span>Interface client</span></Link>
                    <Link className="" to="/preparator"><i className="fas fa-boxes"></i><span>Interface preparateur</span></Link>
                    <Link className="" to="/about"><i className="fas fa-info-circle"></i><span>A propos</span></Link>
                </nav>
            </header>
        );
    }
}

export default Header;