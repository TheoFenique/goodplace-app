import React, { Component } from 'react';
import Gmaps from '../../components/GMaps';
import Search from '../../components/Homepage/Search';
import MainMenu from '../../components/MainMenu';
import Sidebar from '../../components/Sidebar';


class Event extends Component {

    state = {
        SideBarStatus: false,
    }

    ChangeStatus = () => {
        this.setState({ SideBarStatus: !this.state.SideBarStatus })
    }

    componentDidMount() {
        console.log(this.props)
    }


    render() {
        return (
            <React.Fragment>
                <Sidebar status={this.state.SideBarStatus} />
                <Search ChangeStatus={this.ChangeStatus} />
                <Gmaps />
                <MainMenu SingleEvent={true} />
            </React.Fragment>
        );
    }
}

export default Event;