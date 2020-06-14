import React, { Component } from 'react';
import { InfoWindow, Map, Marker , Circle, GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Network from '../../Service/Network';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapStyles = {
  width: '100%',
  height: '700px',
  position: 'relative'
};
const api = new Network()
const arr_location = []

export class MapContainer extends Component {  
    constructor(props) {
        super(props);
        this.componentGetLocation = this.componentGetLocation.bind(this);      
        this.state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
          stores : [
              {
            Location: '',
            confirm_cases: 0,
            treated_cases: 0,
            recovered_cases: 0,
            death_case: 0,
            lat: 0,
            lng: 0
              },
          ]
        }
      }

        onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true

        });
    
        onMapClicked = (props) => {
          if (this.state.showingInfoWindow) {
           this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };
      windowHasClosed = (props) => {
        if(this.state.showingInfoWindow){
          this.setState({
            showingInfoWindow:false,

          })
        }
      };

      async componentGetLocation () {
        try {
                const response = await api.get(`/api/case/location`);
                arr_location.push(Object.values(response.data))
                this.setState({ stores : arr_location[0],  loading: false });    
                console.log(this.state.stores[1].confirm_cases)
            } catch (e) {
                console.log("Error ====> ", e);
        }
      }     

      componentDidMount() {
        this.componentGetLocation();
      }     
      
      render() {
        const { info, lat, lng } = this.state;
        const coords = { lat: 16.123870, lng: 106.186722};
        const stores = this.state.stores;
        return (
          <Map
           onClick={this.onMapClicked}
            initialCenter={coords}
            google={this.props.google}
            zoom={6}
            style={mapStyles}
          >
          { stores.map((anh) => {
          return <Marker 
          onClick={this.onMarkerClick}
          name={anh.Location + ": " + anh.confirm_cases + " " + "ca"}
          position={{
            lat: anh.lat,
            lng: anh.lng
            }} 
         title={anh.Location + ": " + anh.confirm_cases + " " + "ca"}
         animation= {this.props.google.maps.Animation.BOUNCE}
         
         />
         
        })}
        <InfoWindow
          onClose={this.windowHasClosed}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
            <h4>{this.state.selectedPlace.name}</h4>
            </div>
        </InfoWindow>
        
          </Map>
        );
      }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyABmI6zQPZEW5vUWtMuAen2CsXqPoEKlBc'
})(MapContainer);