import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EventCard from './EventCard';


let response = require('../../assets/json/MainMenu/response.json');

const StyledMenu = styled.div`
    box-sizing: border-box;
    background: white;
    position: absolute;
    padding: 40px 20px;
    top: 70%;
    height: fit-content;
    width: 100%;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.15);

    &::after {
        content: '';
        position: absolute;
        width: 100px;
        height: 4px;
        background: rgba(51, 51, 51, 0.2);
        top: 16px;
        left: calc(50% - 50px);
        border-radius: 40px;
    }
`


class MainMenu extends Component {

    state = {
        currentId: -1,
    }

    HandleClick = (id) => {
        console.log("bit")
    }

    render() {
        return (
            <StyledMenu className="main-menu">
                {!this.props.SingleEvent ?
                    <div>
                        <h2>Initiative</h2>
                        <small className="underTitle">Liste des initiatives à proximité</small>
                        {response.map((v, i, a) =>
                            <Link key={v.id} to={`/events/${v.id}`}>
                                <EventCard name={v.name} date={v.date} HandleClick={this.HandleClick} />
                            </Link>
                        )}
                    </div>
                    :
                    <div>
                        <h2>Le nom de l'initiative</h2>
                        <small className="underTitle">Liste des initiatives à proximité</small>

                    </div>}
            </StyledMenu>
        );
    }
}

export default MainMenu;