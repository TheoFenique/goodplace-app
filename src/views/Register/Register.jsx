import React, { Component } from 'react';
import styled from 'styled-components';
import leftarrowlogo from '../../assets/image/Register/left-arrow.svg';
import Button from '../../components/Button';
import FormikRegister from '../../components/FormikApp/Register';

const StyledRegister = styled.div`
display: flex;
    flex-direction: column;
    justify-content:space-between;
    height:100vh;
   
    header{
        background-color: #3498DB;
        height:130px;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        @media screen and (max-height:680px ) {
            height:110px;
        } 
        @media screen and (max-height:600px ) {
            height:100px;
        } 
        p{
            color:white;
            font-weight:bold;
            font-size:22px;
            margin-top:0;
            width: calc(100% - 40px);
            margin-bottom: 10px;
            max-width: 370px;
            @media screen and (max-height:680px ) {
        font-size:18px;
        } 
        @media screen and (max-height:600px ) {
        font-size:16px;
        } 
        }
        a{
            align-self: baseline;
        img{
            height:25px;
            margin-left: 20px;
            margin-bottom: 20px;
            @media screen and (max-height:680px ) {
        margin-bottom:10px;
        } 
    }
        }
    }
    .footerButton{
        display:flex;
        justify-content:center;
        justify-content: space-between;
       padding-left: 20px;
       padding-right: 20px;
       padding-bottom:10px;
  
    }
`
class Register extends Component {

    state = {
        isAssos: false,
    }

    HandleCheckbox = (_e) => {
        console.log(_e)
        this.setState({ isAssos: _e.target.value })
    }

    render() {
        return (
            <div>
                <StyledRegister>
                    <header>
                        <a href="connexion"> <img src={leftarrowlogo}></img></a>
                        <p>Quelques informations <br />personnelles,</p>
                    </header>
                    <FormikRegister HandleCheckbox={this.HandleCheckbox} />

                    <div className="footerButton">
                        <Button link="test" theme={false} >Confirmer</Button>
                        <Button link="connexion" theme={true} >Annuler</Button>
                    </div>

                </StyledRegister>
            </div>
        );
    }
}

export default Register;