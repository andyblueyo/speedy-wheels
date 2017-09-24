import $ from 'jquery'
import React, { Component } from 'react';
import { Card, Image, Icon, Container } from 'semantic-ui-react';
import {features, features2} from './mapData';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';
import { Map, Marker, Popup, TileLayerCircle,
          CircleMarker,
          Polygon,
          Polyline,
          Rectangle,
          TileLayer, GeoJSON} from 'react-leaflet';

const builtMarker2 = [];
const position = [45.11, -122.3];

const builtMarker = (function() {
    const position = [45.11, -122];
  return (
    <Marker position={position}/>
  );
})();

const map = (<Map center={position} zoom={10} style={{width: '100%'} }>
              <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <GeoJSON data={getGeoJson()} style={this.southKing} />
            <GeoJSON data={getGeoJsonNorthKing()} style={this.northKing} />
            {builtMarker}
            {builtMarker2}
            </Map>);
function getGeoJsonNorthKing() {
  return {
    "type": "FeatureCollection",
    "color": "red",
    "features":features
  };
}

function getGeoJson() {
  return {
      "type": "FeatureCollection",
      "features": features2
    };
  }

class Map2 extends Component {
  constructor(props) {
    super(props);
    this.state = {origin: []};
  }
  componentDidUpdate() {
    if (true) {
      const builtMarker2 = (function() {
        this.setState( {origin : [60, -122]});
      return (
        <Marker position={this.state.origin}/>
      );
    })();
    }
  }
  southKing(feature, layer) {
    return {
      fill:"orange",
      color: '#006400',
      weight: 5,
      opacity: 0.65
    }
  }
  northKing(feature, layer) {
    return {
      fill:"red",
      color: '#ffffff',
      weight: 5,
      opacity: 0.65
    }
  }
  render() {
    
    return (
      <div>
            {map}
      </div>
    );
  }
}

export default Map2;
