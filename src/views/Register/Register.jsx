import React, { Component } from 'react';
import styled from 'styled-components';
import leftarrowlogo from '../../assets/image/Register/left-arrow.svg';
import Button from '../../components/Button';
import FormikRegister from '../../components/FormikApp/Register';

const StyledRegister = styled.div`

    header{
        background-color: #3498DB;
        height:150px;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        p{
            color:white;
            font-weight:bold;
            font-size:1.4rem;
            margin-top:0;
            width: calc(100% - 40px);
            margin-bottom: 10px;
            max-width: 370px;
        }
        img{
            height:25px;
            align-self: baseline;
            margin-left: 20px;
            margin-bottom: 20px;
        }
    }
    .footerButton{
        display:flex;
        justify-content:center;
        justify-content: space-between;
    padding: 20px;
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
                        <img src={leftarrowlogo}></img>
                        <p>Quelques informations  personnelles,</p>
                    </header>
                    <FormikRegister HandleCheckbox={this.HandleCheckbox} />

                    <div className="footerButton">
                        <Button link="test" theme={false} >Confirmer</Button>
                        <Button link="test" theme={true} >Annuler</Button>
                    </div>

                </StyledRegister>
            </div>
        );
    }
}

export default Register;