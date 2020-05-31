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

      async componentGetLocation () {
        try {
                const response = await api.get(`/api/case/location`);
                arr_location.push(Object.values(response.data))
                this.setState({ stores : arr_location[0],  loading: false });    
            } catch (e) {
                console.log("Error ====> ", e);
        }
      }    
      
      display = () => {
        return this.state.stores.map((anh) => {
          return <Marker position={{
           lat: anh.lat,
           lng: anh.lng
         }} title={anh.Location}
         />
        })
      }

      componentDidMount() {
        this.componentGetLocation();
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
          {this.display()}
          </Map>
        );
      }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyABmI6zQPZEW5vUWtMuAen2CsXqPoEKlBc'
})(MapContainer);