import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerClusterer from '@googlemaps/markerclustererplus';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
  }
  // static defaultProps = {
  //   center: {
  //     lat: -28.024,
  //     lng: 140.887
  //   },
  //   zoom: 3
  // };
  // handleApiLoaded = (map, maps) => {
  //   // use map and maps objects
  //   const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   const locations = [
  //     { lat: -31.56391, lng: 147.154312 },
  //     { lat: -33.718234, lng: 150.363181 },
  //     { lat: -33.727111, lng: 150.371124 },
  //     { lat: -33.848588, lng: 151.209834 },
  //     { lat: -33.851702, lng: 151.216968 },
  //     { lat: -34.671264, lng: 150.863657 },
  //     { lat: -35.304724, lng: 148.662905 },
  //     { lat: -36.817685, lng: 175.699196 },
  //     { lat: -36.828611, lng: 175.790222 },
  //     { lat: -37.75, lng: 145.116667 },
  //     { lat: -37.759859, lng: 145.128708 },
  //     { lat: -37.765015, lng: 145.133858 },
  //     { lat: -37.770104, lng: 145.143299 },
  //     { lat: -37.7737, lng: 145.145187 },
  //     { lat: -37.774785, lng: 145.137978 },
  //     { lat: -37.819616, lng: 144.968119 },
  //     { lat: -38.330766, lng: 144.695692 },
  //     { lat: -39.927193, lng: 175.053218 },
  //     { lat: -41.330162, lng: 174.865694 },
  //     { lat: -42.734358, lng: 147.439506 },
  //     { lat: -42.734358, lng: 147.501315 },
  //     { lat: -42.735258, lng: 147.438 },
  //     { lat: -43.999792, lng: 170.463352 }
  //   ];
  //   const markers = locations.map((location, i) => {
  //     return new maps.Marker({
  //       position: location,
  //       //label: labels[i % labels.length],
  //       label: ''
  //     });
  //   });

  //   new MarkerClusterer(map, markers, {
  //     imagePath:
  //       'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  //   });
  // };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDEeI1tcGjL2CddJsenJxeUR0P5uxkentM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        > */}
        {/* {this.props.flags} */}
        {/* </GoogleMapReact> */}
      </div>
    );
  }
}

export default SimpleMap;
