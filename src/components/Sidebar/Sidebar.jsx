import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/image/Sidebar/logo.svg';

const StyledSidebar = styled.div`
    /* position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 40000000;
    box-shadow: 0px 0px 8px rgba(51, 51, 51, 0.15);
    transition: all 0.3s ease-in-out; */

    .SlideBg {
        position: absolute;
        background: black;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }

    .sidebar {
        position: absolute;
        width: 80%;
        height: 100vh;
        background: white;

        h1 {
            color: #3498DB;
            margin: 28px 14px 28px 20px;
            font-size: 24px;
        }

        .logo-container {
            display: flex;
        }

        ul {
            margin: 0;
            list-style: none;
        }
    }
`

class Sidebar extends Component {
    render() {
        return (
            <StyledSidebar >
                <div className="SlideBg" style={{ opacity: this.props.status ? "0" : "100%" }}></div>
                <div className="sidebar" style={{ left: this.props.status ? "-100%" : "0" }}>
                    <div className="logo-container">
                        <h1>GoodPlace</h1>
                        <img src={logo} alt="logo" />
                    </div>
                    <ul>
                        <li>Connexion</li>
                    </ul>
                </div>
            </StyledSidebar>
        );
    }
}

export default Sidebar;