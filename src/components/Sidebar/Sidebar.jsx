import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/image/Sidebar/logo.svg';

const StyledSidebar = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 40000000;
    box-shadow: 0px 0px 8px rgba(51, 51, 51, 0.15);
    transition: all 0.4s cubic-bezier(0.75, 0, 0.25, 1);

    .sidebar {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: space-between;
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: white;
        padding: 20px;

        h1 {
            color: #3498DB;
            margin: 8px 14px 3px 0px;
            font-size: 24px;
        }

        .logo-container {
            display: flex;
            position: relative;
            justify-content: space-between;
            align-items: center;
            margin-bottom:30px;

            .cross {
                position: relative;
                width: fit-content;
                height: fit-content;
                width: 29px;
                height: 29px;
                &::before {
                    content: '';
                    position: absolute;
                    top:0;
                    left:0;
                    bottom: 0;
                    right:0;
                    width: 30px;
                    height: 3px;
                    background: rgba(200,200,200, 1);
                    border-radius: 30px;
                    transform: translate(0%, 400%) rotate(45deg)
                }
                &::after {
                    content: '';
                    position: absolute;
                    top:0;
                    left:0;
                    bottom: 0;
                    right:0;
                    width: 30px;
                    height: 3px;
                    background: rgba(200,200,200, 1);
                    border-radius: 30px;
                    transform: translate(0%, 400%) rotate(-45deg)
                }
            }

            div {
                display: flex;
            }
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                padding: 15px 0;
                a {
                    text-decoration: none;
                    color: black;
                }
            }
        }

        .button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50px;
            margin: 0 auto;
            color: white;
            border-radius: 10px;
            background:#3498DB;
            text-decoration: none;
        }
    }
`

class Sidebar extends Component {
    render() {
        return (
            <StyledSidebar style={{ left: this.props.status ? "0" : "-100%" }}>
                <div className="sidebar">
                    <div>
                        <div className="logo-container">
                            <div>
                                <h1>GoodPlace</h1>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="cross" onClick={this.props.ChangeStatus}></div>
                        </div>
                        <ul>
                            <li><a href="/profile">Votre profil</a></li>
                            <li><a href="/mentions">Mention légale</a></li>
                            <li><a href="/">Mode low-data</a></li>
                        </ul>
                    </div>
                    <a href="/connexion" className="button">
                        Se connecter
                    </a>
                </div>
            </StyledSidebar>
        );
    }
}

export default Sidebar;