import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <a href={this.props.link} className={this.props.full ? "button full" : "button light"} type="button">
                {this.props.children}
            </a>
        );
    }
}

export default Button;