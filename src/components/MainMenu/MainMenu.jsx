import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EventCard from './EventCard';
import pinlogo from '../../assets/image/Event/pin.svg'
import calendarlogo from '../../assets/image/Event/calendar.svg'
import clocklogo from '../../assets/image/Event/clock.svg'
import messagelogo from '../../assets/image/Event/message.svg'
import maplogo from '../../assets/image/Event/map.svg'

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

    .eventDescription {
    display: flex;
    margin-bottom:-15px;
        img{
        margin-right: 10px;
        }
}
.textDescription{
    color: #333333;
    margin-top:5vh;
    margin-bottom:5vh;
}

.bottomButton{
    display:flex;
    .messageButton{
        background-color: #3498DB;
        width:20%;
        height:50px;
        display:flex;
        justify-content:center;
        align-items: center;
        border-radius: 15px;
        img{
            padding:10px;
        }
    }
    .mapButton{
        border: solid #3498DB 1px;
        border-radius: 15px;
        display:flex;
        justify-content:center;
        align-items:center;
        width:75%;
        height:50px;
        margin-left:5%;
        p{
            color:#3498DB;
            margin-left:10px;
        }
    }
}
`

const StyledDivEvent = styled.div`
    display:flex;
`

class MainMenu extends Component {

    state = {
        currentId: -1,
        apievent: {}
    }

    HandleClick = (id) => {
        console.log("bit")
    }

    componentDidMount() {
        if (this.props.SingleEvent) {
            const resevent = require('../../assets/json/MainMenu/singleevent.json')
            this.setState({ apievent: resevent[0] })
            console.log(this.state, resevent)
        }
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
                        <h2>{this.state.apievent.name}</h2>
                        <div className="eventDescription">
                            <img src={pinlogo}></img>
                            <p className="underTitle">{this.state.apievent.street}</p>
                        </div>
                        <div className="eventDescription">
                            <img src={calendarlogo}></img>
                            <p className="underTitle">{this.state.apievent.date}</p>
                        </div>
                        <div className="eventDescription">
                            <img src={clocklogo}></img>
                            <p className="underTitle">{this.state.apievent.hour}</p>
                        </div>
                        <p className="textDescription">{this.state.apievent.text}</p>
                        <div className="bottomButton">
                            <div className="messageButton"><img src={messagelogo}></img></div>
                            <div className="mapButton">
                                <img src={maplogo}></img>
                                <p>Voir l'ittinéraire</p>
                            </div>
                        </div>
                    </div>}
            </StyledMenu>
        );
    }
}

export default MainMenu;