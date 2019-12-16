import React, { Component } from 'react';
import Gmaps from '../../components/GMaps';
import MainMenu from '../../components/MainMenu';


class Homepage extends Component {

    render() {
        return (
            <React.Fragment>
                <Gmaps />
                <MainMenu />
            </React.Fragment>
        );
    }
}

export default Homepage;