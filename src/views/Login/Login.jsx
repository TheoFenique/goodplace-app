import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/image/Connexion/logo.png';
import road from '../../assets/image/Connexion/road.png';
import FormikConnexion from '../../components/FormikApp/Connexion';

const StyledHeader = styled.header`
    position: relative;
    height: 250px;
    width: 100vw;
    background-image: url(${road});
    background-position: center;
    background-size: 120%;
    h1 {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        font-size: 32px;
        z-index: 2;
        color: #333333;

       span {
           font-size: 32px;
           color: #3498DB;
       } 
    }

    .logo {
        position: absolute;
        height: 92px;
        left: calc(50% - 30px);
        top: 30px;
    }

    img {
        height: 250px;
    }

    .gradient-bg {
        position: absolute;
        bottom: 0;
        width: 100vw;
        height: 120px;
        background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    }
`



class Login extends Component {
    render() {
        return (
            <div>
                <StyledHeader>
                    <h1>Connexion<br />sur <span>GoodPlace !</span></h1>
                    <img className="logo" src={logo} alt="logo" />
                    <div className="gradient-bg"></div>
                </StyledHeader>
                <FormikConnexion />
                <p style={{fontSize: "14px", padding: "20px", color: "#333333", textAlign: "center"}}>Vous n'avez pas de compte ?<a style={{fontSize: "14px", color: "#3498DB", textDecoration:"none", marginLeft:"5px"}}href="/inscription">Cliquez ici.</a></p>
            </div>
        );
    }
}

export default Login;