import React, { Component } from 'react';
import Gmaps from '../../components/GMaps';
import MainMenu from '../../components/Homepage/MainMenu';


class Event extends Component {

    render() {
        return (
            <React.Fragment>
                <Gmaps />
                <MainMenu />
            </React.Fragment>
        );
    }
}

export default Event;