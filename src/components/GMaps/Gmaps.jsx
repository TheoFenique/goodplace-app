import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { Component } from 'react';
import key from '../../assets/apikey.json';

const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'fixed!important'
};

class Gmaps extends Component {
    render() {
        return (
            <div style={{ position: 'fixed', width: '100vw', height: '100vh' }}><Map
                google={this.props.google}
                zoom={13}
                style={mapStyles}
                initialCenter={{ lat: 48.858616, lng: 2.347426 }}
                disableDefaultUI={true}
            /></div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: key.key
})(Gmaps);