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
const position = [47.608013, -122.3321];

const map = (<Map center={position} zoom={10} style={{width: '100%'} }>
              <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <GeoJSON data={getGeoJson()} style={this.southKing} />
            <GeoJSON data={getGeoJsonNorthKing()} style={this.northKing} />
              <Marker position={position}>
                <Popup>
                  <span>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </span>
                </Popup>
              </Marker>
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

class MyMap extends Component {
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

export default MyMap;
