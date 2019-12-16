import React, { Component } from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';


let response = require('../../assets/json/MainMenu/response.json');

const StyledMenu = styled.div`
    box-sizing: border-box;
    background: white;
    position: absolute;
    padding: 40px 20px;
    top: 70%;
    height: 90%;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.15);

    &::after {
        content: '';
        position: absolute;
        width: 100px;
        height: 4px;
        background: rgba(51, 51, 51, 0.6);
        top: 16px;
        left: calc(50% - 50px);
    }
`


class MainMenu extends Component {
    render() {
        return (
            <StyledMenu className="main-menu">
                <h2>Initiative</h2>
                <small className="underTitle">Liste des initiatives à proximité</small>
                {response.map((v, i, a) =>
                    <EventCard name={v.name} date={v.date} key={i} />
                )}
            </StyledMenu>
        );
    }
}

export default MainMenu;