import React, { Component } from 'react';
import { Card, Image, Icon, Container } from 'semantic-ui-react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  render() {

    return (
      <Container>
      <Card>
       <Image src='http://www.kirklandwa.gov/Assets/Senior+Center+Van.jpg' />
       <Card.Content>
         <Card.Header>Kirkland Senior Van</Card.Header>
         <Card.Meta>
         <a
         href="http://www.kirklandwa.gov/depart/parks/About_Parks_and_Community_Services/Senior_Services/Van_Service_Trip.htm" target="_blank">Offical Information</a>
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
       <Image src='http://www.kirklandwa.gov/Assets/Senior+Center+Van.jpg' />
       <Card.Content>
         <Card.Header>Kirkland Senior Van</Card.Header>
         <Card.Meta>
         <a
         href="http://www.kirklandwa.gov/depart/parks/About_Parks_and_Community_Services/Senior_Services/Van_Service_Trip.htm" target="_blank">Offical Information</a>
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
      </Container>
    );
  }
}

export default App;
