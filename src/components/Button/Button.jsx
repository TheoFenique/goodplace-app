import React, { Component } from 'react';
import styled from 'styled-components';
import './Button.css';

const StyledButtonRegister = styled.div`
   
    a{
    text-decoration:none;
    width:40vw;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    @media screen and (max-height:600px ) {
            font-size:12px;
            height:40px;
        } 
    }

    .white {
        color:#333333;
        background-color: white;
        border: #333333 1px solid;
    }

    .blue {
    background-color: #3498DB;
    color:white;
    }
`
class Button extends Component {
    render() {
        return (
            <StyledButtonRegister>
                <a class={this.props.theme ? "white" : "blue"} href={this.props.link} type="button">
                    {this.props.children}
                </a>
            </StyledButtonRegister>
        );
    }
}

export default Button;