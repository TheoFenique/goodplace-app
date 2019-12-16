import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'fixed!important'
};

class Gmaps extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={13}
                style={mapStyles}
                initialCenter={{ lat: 48.858616, lng: 2.347426 }}
                disableDefaultUI={true}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZ6Wm_m7GREin9ok7xuIsR83hRa-3XC3E'
})(Gmaps);