import React, { Component } from 'react';
import Gmaps from '../../components/GMaps';
import MainMenu from '../../components/Homepage/MainMenu';
import Search from '../../components/Homepage/Search';
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
                <MainMenu />
            </React.Fragment>
        );
    }
}

export default Homepage;