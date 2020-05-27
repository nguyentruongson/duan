import React, { Component } from 'react';
import { Map, Marker , Circle, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '700px',
  position: 'relative'
};

export class MapContainer extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          stores : [
              {latitude: 21.057788, longitude: 104.868363},
              {latitude: 18.055986, longitude: 106.032913},
              {latitude: 21.283174, longitude: 104.384964}
          ]
        }
      }

      displayMarkers = () => {
        return this.state.stores.map((anh) => {
          return <Marker position={{
           lat: anh.latitude,
           lng: anh.longitude
         }}
        /> &&
         <Circle
              radius={100000}
              center={{
              lat: anh.latitude,
              lng: anh.longitude
              }}
              strokeColor='transparent'
              strokeOpacity={0}
              strokeWeight={5}
              fillColor='#FF0000'
          />
        })
      }
      
      render() {
        const coords = { lat: 16.123870, lng: 106.186722};
       
        return (
          <Map
            initialCenter={coords}
            google={this.props.google}
            zoom={6}
            style={mapStyles}
          >
          {this.displayMarkers()}
          </Map>
        );
      }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyABmI6zQPZEW5vUWtMuAen2CsXqPoEKlBc'
})(MapContainer);