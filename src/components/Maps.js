

import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
 class Maps extends Component {
  render() {
    return (
        <div className="content">
       
        {/* <iframe className="w-100 mh-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.45446938823!2d75.72376397472755!3d22.72391173166939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1604400653235!5m2!1sen!2sin"></iframe> */}
        
      <Map google={this.props.google} zoom={8} >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>
      </Map>
      </div>
      
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBchQyywAYbljGqoa-g5txvLsq0qDQrLjU")
})(Maps)
