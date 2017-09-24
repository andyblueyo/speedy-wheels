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

const map = (<Map center={position} zoom={10}>
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
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {map}
          </div>
          <div className="col-md-6">
            <Card.Group itemsPerRow={6}>
            <Card>
            <Image src='http://www.kirklandwa.gov/Assets/Senior+Center+Van.jpg' />
            <Card.Content>
              <Card.Header>
              <a
              href="http://www.kirklandwa.gov/depart/parks/About_Parks_and_Community_Services/Senior_Services/Van_Service_Trip.html" target="_blank">Kirkland Senior Van</a>

              </Card.Header>
              <Card.Meta>

              <a href="tel:4255873363">
              <Icon name='volume control phone' size='large' />
              (425) 587-3363
              </a>

              </Card.Meta>
              <Card.Description>
                The Peter Kirk Community Center offers a variety of fun day trips.
                From visits to beautiful gardens and nurseries to museums,
                casinos, zoos and boat trips, there is always an adventure just right
                for you! For a complete listing of trips refer to the Parks
                & Community Services Quarterly Activity Guide.
                <a
                href="http://www.kirklandwa.gov/depart/parks/About_Parks_and_Community_Services/Senior_Services/Van_Service_Trip.htm" target="_blank">
                Offical Information</a>
                <a href="tel:4255873363">
                <Icon name='volume control phone' size='large' />
                (425) 587-3363
                </a>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Votes
              </a>
            </Card.Content>
            </Card>

            <Card>
            <Image src='http://www.hawaiiexecutivetransportation.com/WebObjects/HETSWebApp_1.woa/Contents/WebServerResources/images/mercedes-sprinter-van4.png' />
            <Card.Content>
              <Card.Header>
              <a
              href="http://www.vets-go.com/provider/american-parkinsons-disease-association-apda-ride-repay-program" target="_blank">
                American Parkinson&#39;s Disease Association (APDA) Ride Repay Program</a>
              </Card.Header>
              <Card.Meta>

              <a href="tel:2066952905">
              <Icon name='volume control phone' size='large' />
                (206)-695-2905
              </a>

              </Card.Meta>
              <Card.Description>
                Use the transportation of your choice to go to a doctor&#39;s appointment,
                visit a friend, or where ever you wish (no limitations on your travel).
                APDA will reimburse you up to $300 per year for eligible travel expenses such as taxi,
                bus, ferry, or rail fare or gasoline expenses. Fill out the application at APDA website or call 206-695-2905.
                In order to be eligible, you must have a Parkinson&#39;s diagnosis
                <p>
                  <a
                  href="http://www.vets-go.com/provider/american-parkinsons-disease-association-apda-ride-repay-program" target="_blank">
                  Offical Information
                  </a>
                </p>
                <p>
                  <a href="tel:2066952905">
                    <Icon name='volume control phone' size='large' />
                    206-695-2905
                  </a>
                </p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Votes
              </a>
            </Card.Content>
            </Card>

            <Card>
                  <Image src='http://www.kirklandwa.gov/Assets/Senior+Center+Van.jpg' />
                  <Card.Content>
                    <Card.Header>
                    <a
                    href="https://www.cancer.org/treatment/support-programs-and-services/road-to-recovery.html"
                    target="_blank">Road To Recovery</a>

                    </Card.Header>
                    <Card.Meta>

                    <a href="tel:8002272345">
                    <Icon name='volume control phone' size='large' />
                    (800)-227-2345
                    </a>

                    </Card.Meta>
                    <Card.Description>
                    Depending on your individual needs and what’s available in your area, we will:

      Coordinate a ride with an American Cancer Society volunteer driver
      Coordinate a ride with a local organization that has partnered with us to provide transportation
      Refer you to a local resource you can contact for help
                      <a
                      href="https://www.cancer.org/treatment/support-programs-and-services/road-to-recovery.html"
                      target="_blank">
                      Offical Information</a>
                      <a href="tel:8002272345">
                      <Icon name='volume control phone' size='large' />
                    (800)-227-2345
                      </a>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      10 Votes
                    </a>
                  </Card.Content>
                  </Card>
              </Card.Group>
            </div>
          </div>
      </div>
    );
  }
}

export default MyMap;
