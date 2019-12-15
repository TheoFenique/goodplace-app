import React, { Component } from 'react';
import header from '../../assets/Profiles/Images/header.svg';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={header} alt="en-tete" />
                {this.props.children}
            </div>
        );
    }
}

export default Header;