import React, { Component } from 'react';
import Gmaps from '../../components/GMaps';
import Search from '../../components/Homepage/Search';
import MainMenu from '../../components/MainMenu';
import Sidebar from '../../components/Sidebar';


class Homepage extends Component {

    state = {
        SideBarStatus: true,
    }

    ChangeStatus = () => {
        this.setState({ SideBarStatus: !this.state.SideBarStatus })
        console.log(this.state.SideBarStatus)
    }

    render() {
        return (
            <React.Fragment>
                <Sidebar status={this.state.SideBarStatus} />
                <Search ChangeStatus={this.ChangeStatus} />
                <Gmaps />
                <MainMenu SingleEvent={false} />
            </React.Fragment>
        );
    }
}

export default Homepage;