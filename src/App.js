import $ from 'jquery'
import React, { Component } from 'react';
import { Card, Image, Icon, Container, Divider, Menu } from 'semantic-ui-react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// const position = [51.505, -0.09];
class App extends Component {
  state = {activeItem : "editorials"}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu size={'massive'} className={'customerSearchBar'}>
      <Menu.Item
        name='editorials'
        active={activeItem === 'editorials'}
        onClick={this.handleItemClick}
      />
      <Menu.Item
        name='reviews'
        active={activeItem === 'reviews'}
        onClick={this.handleItemClick}
      />
      <Menu.Item
        name='upcomingEvents'
        active={activeItem === 'upcomingEvents'}
        onClick={this.handleItemClick}
      />
    </Menu>
      <div>

      </div>
<Card.Group itemsPerRow={4}>
<Card>
       <Image src='http://www.kirklandwa.gov/Assets/Senior+Center+Van.jpg' height={200}/>
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
          <Divider/>
          <p>
            <a
            href="http://www.kirklandwa.gov/depart/parks/About_Parks_and_Community_Services/Senior_Services/Van_Service_Trip.htm"
            target="_blank">
            Offical Information
            </a>
          </p>
          <p>
            <a href="tel:4255873363">
            <Icon name='volume control phone' size='large' />
            (425) 587-3363
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
       <Image src='http://www.hawaiiexecutivetransportation.com/WebObjects/HETSWebApp_1.woa/Contents/WebServerResources/images/mercedes-sprinter-van4.png' height={200} />
       <Card.Content>
         <Card.Header>
         <a
         href="http://www.vets-go.com/provider/american-parkinsons-disease-association-apda-ride-repay-program" target="_blank">
          (APDA) Ride Repay Program</a>
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
           bus, ferry, or rail fare or gasoline expenses.
           <Divider/>

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
             <Image src='http://www.kirklandwa.gov/Assets/Senior+Center+Van.jpg'  height={200}/>
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
 <Divider/>

                <p>
                  <a
                  href="https://www.cancer.org/treatment/support-programs-and-services/road-to-recovery.html"
                  target="_blank">
                  Offical Information<
                  /a>
                </p>
                <p>
                  <a href="tel:8002272345">
                  <Icon name='volume control phone' size='large' />
                 (800)-227-2345
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



      </Card.Group>
      </div>
    );
  }
}

export default App;
