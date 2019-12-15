import React, { Component } from 'react';
import profilesIllu from '../../assets/Profiles/Images/profiles-illu.png';
import Button from '../../components/Button';
import Header from '../../components/Header';
import './Profiles.css';



class Profiles extends Component {
    render() {
        return (
            <div className="profiles">
                <Header>
                    <h1>Bienvenue,<br /> sur GoodPlace</h1>
                </Header>
                <div className="main-illu">
                    <img src={profilesIllu} alt="" />
                </div>
                <div className="buttons">
                    <p>Que voulez-vous faire ?</p>
                    <Button full={true} link="/connexion">
                        <span>Je me <b>connecte</b></span>
                    </Button>
                    <Button full={false} link="register">
                        <span>Je me <b>créer</b> un compte</span>
                    </Button>
                </div>
            </div>
        );
    }
}

export default Profiles;