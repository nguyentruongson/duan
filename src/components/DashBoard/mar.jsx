import React, { Component } from 'react';
import { InfoWindow, Map, Marker , GoogleApiWrapper } from 'google-maps-react';


import Network from '../../Service/Network';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from './icon.png';
import Icondefault from './icondefault.png';
const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'relative'
};

const api = new Network()
const arr_location = []

export class MapContainer extends Component {  
    constructor(props) {
        super(props);
        this.componentGetLocation = this.componentGetLocation.bind(this);      
        this.state = {
          iconcovid: '',
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

        onMarkerClick = (props, marker, e) =>{
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true

        });
      };
        onMouseoverMarker = (props, marker, e) => {
          marker.setIcon(Icondefault)
        };
        onMouseOutMarker = (props, marker, e) => {
          marker.setIcon(null) 
        };

        onMouseoverMarker1 = (props, marker, e) => {
          marker.setIcon(Icon)
        };
        onMouseOutMarker1 = (props, marker, e) => {
          marker.setIcon(Icon) 
        };
    
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
                
            } catch (e) {
                console.log("Error ====> ", e);
        }
      }     

      componentDidMount() {
        this.componentGetLocation();
      }     
      
      render() {
         
        const coords = { lat: 16.123870, lng: 106.186722};
        const stores = this.state.stores;
        return (
          <Map
           onClick={this.onMapClicked}
            initialCenter={coords}
            google={this.props.google}
            zoom={5.5}
            style={mapStyles}
          >
          { stores.map((anh) => {
          if(anh.confirm_cases>10){
          return <Marker
          icon={Icon} 
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker1}
          onMouseout={this.onMouseOutMarker1}
          name={anh.Location + ": " + anh.confirm_cases + " " + "ca"}
          position={{
            lat: anh.lat,
            lng: anh.lng
            }} 
         title={anh.Location + ": " + anh.confirm_cases + " " + "ca"}
         animation= {this.props.google.maps.Animation.BOUNCE}
         
         />
          }
          else {
            return <Marker
           
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          onMouseout={this.onMouseOutMarker}
          name={anh.Location + ": " + anh.confirm_cases + " " + "ca"}
          position={{
            lat: anh.lat,
            lng: anh.lng
            }} 
         title={anh.Location + ": " + anh.confirm_cases + " " + "ca"}
         animation= {this.props.google.maps.Animation.DROP}
         
         />
          }
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