import React, { Component } from 'react'
import { Form, Header, Container, Divider, Grid, Button, Checkbox, Menu, Sticky, Card, Image, Icon } from 'semantic-ui-react'
import SimpleForm  from './MyGoogleSuggest';
import CardBottom  from './CardBottom';
import ResultCard from './ResultCard';
import MyMap from './MyMap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
const position = [51.505, -0.09];

const options = [
  { key: '65', text: '65+', value: '65' },
  { key: '55', text: '55-64', value: '55' },
  { key: '30', text: '30-55', value: '30' },
  { key: '10', text: '<30', value: '10' },
]

const Mobilityoptions = [
  { key: 'none', text: 'None', value: 'none' },
  { key: 'Wheelchair', text: 'Wheelchair', value: 'Wheelchair' },
  { key: 'Powerchair', text: 'Powerchair', value: 'Powerchair' },
  { key: 'DoorToDoorService', text: 'Door to Door Service', value: 'DoorToDoorService' },


]

class SearchForm extends Component {
  state = {showEmailAddress: false, showPhoneNumber: false, value:{}}
  constructor(props) {
     super(props);
     this.onChangeOrigin = this.onChangeOrigin.bind(this);
     this.onChangeDestination = this.onChangeDestination.bind(this);
   }

  handleChange = (e, { value }) => {
    var originalVal = this.state.value;
    var nameAtr = e.target.name || '';
    if(nameAtr){
      originalVal[nameAtr] = value;
      this.setState({ value:originalVal })
    }
  }

    handleSubmit = (e, { value }) => {
      e.preventDefault();
      console.log("eva: e", e)
        console.log("eva: value", this.state.value)

        var request = {}
        request.name = "Eva"
        request.origin = "4560 34th Ave S, Seattle, WA 98118"
        request.destination = "325 9th Ave, Seattle, WA 98104"
        request.age = 65
        request.date = "2017/10/02"
        request.time = "10:00:00"
        request.ifNeedReturn = true
        request.ifMedicalApt = false
        // console.log("eva: handleSubmit",this.getResponse(request))
    }
  toggleEmailForm=()=>{
    this.setState({showEmailAddress: !this.state.showEmailAddress});
  }

  tooglePhoneForm= ()=>{
    this.setState({showPhoneNumber: !this.state.showPhoneNumber});
  }

  onChangeOrigin(data){
      var originalVal = this.state.value || {};
      originalVal["origin"] = data;
      this.setState({value:originalVal });
  }

  onChangeDestination(data){
      var originalVal = this.state.value || {};
      originalVal["destination"] = data;
      this.setState({value:originalVal });
  }
  handleContextRef = contextRef => this.setState({ contextRef })
  render() {
    const { value } = this.state
    const { contextRef } = this.state

      return (
        <div>
          {/* <Sticky className="myCustomerHeaders"> */}
            <Menu size='massive'  className="myCustomerHeaders" fixed="top" className="headerA">
              <Menu.Item name='' width={'200'}  className="myCustomerHeaders"/>
              <Menu.Header as='h2' icon='search' content='Request Shuttle' className="myCustomerHeaders"/>
          <Menu.Menu position='right'  className="myCustomerHeaders">
            <Menu.Item>
              <Button><a href="/">Visit</a></Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      {/* </Sticky> */}
      <div className="wrapper marignTop80">
        <Sticky context={contextRef} offset="80" className="stickeySidebar">
        <div>

        <div className="smallBox">
        <div >
          <Header as='h2' icon='search' content='Search Shuttle' textAlign="center"/>
          <div className="textButtons">
          <label>Text Size</label>
          <span className="spanMarign"></span>
            <Button size='tiny'>
              A
            </Button>
            <Button size='small'>
              A
            </Button>
            <Button size='medium'>
              A
            </Button>
          </div>
        </div>
        <Form onSubmit={this.handleSubmit}>
        <Divider horizontal>Basic Information</Divider>

          <Form.Field>
            <label>From</label>
            <SimpleForm onChange={this.onChangeOrigin} placeholder={'Where are you starting from?'}/>
          </Form.Field>
          <Form.Field>
            <label>To</label>
            <SimpleForm onChange={this.onChangeDestination} placeholder={'Where would you like to go?'}/>
          </Form.Field>
        <Divider horizontal></Divider>
        <label>From</label>
        <input type="datetime-local" name="fromTime" onChange={this.handleChange} />
        <label>To</label>
        <input type="datetime-local" name="toTime" onChange={this.handleChange} />
        <Form.Select label='Age' name="age" options={options} placeholder='Gender' onChange={this.handleChange} />
        <Form.Select label='Mobility' name="mobility" options={Mobilityoptions} placeholder='Gender' onChange={this.handleChange} />
        <Checkbox label='Is this for a medical trip?' />
        <Checkbox label='Are you blind/ visually impaired?' />
        <Checkbox label='Do you require door to door service?' />

          <Form.Button>Submit</Form.Button>
      </Form>
      </div>
  </div>
</Sticky>
      <div className="customerResult">
        <MyMap />
        <Card.Group itemsPerRow={3}>

          <ResultCard
            imgUrl={'http://www.kirklandwa.gov/Assets/Senior+Center+Van.jpg'}
            title={'Kirkland Senior Van'}
            url={'http://www.kirklandwa.gov/depart/parks/About_Parks_and_Community_Services/Senior_Services/Van_Service_Trip.html'}
            phone={'4255873363'}
            content={'The Peter Kirk Community Center offers a variety of fun day trips.From visits to beautiful gardens and nurseries to museums, casinos, zoos and boat trips, there is always an adventure just right for you! For a complete listing of trips refer to the Parks& Community Services Quarterly Activity Guide.'}
          />

        <ResultCard
          imgUrl={'http://www.hawaiiexecutivetransportation.com/WebObjects/HETSWebApp_1.woa/Contents/WebServerResources/images/mercedes-sprinter-van4.png'}
          title={'American Parkinson&#39;s Disease Association (APDA) Ride Repay Program'}
          url={'http://www.vets-go.com/provider/american-parkinsons-disease-association-apda-ride-repay-program'}
          phone={'2066952905'}
          content={'Use the transportation of your choice to go to a doctor&#39;s appointment,visit a friend, or where ever you wish (no limitations on your travel). APDA will reimburse you up to $300 per year for eligible travel expenses such as taxi, bus, ferry, or rail fare or gasoline expenses. Fill out the application at APDA website or call 206-695-2905. In order to be eligible, you must have a Parkinson&#39;s diagnosis'}
      />
      <ResultCard
        imgUrl={'http://www.kirklandwa.gov/Assets/Senior+Center+Van.jpg'}
        title={'Road To Recovery'}
        url={'https://www.cancer.org/treatment/support-programs-and-services/road-to-recovery.html'}
        phone={'8002272345'}
        content={'Depending on your individual needs and what’s available in your area, we will:Coordinate a ride with an American Cancer Society volunteer driverCoordinate a ride with a local organization that has partnered with us to provide transportation Refer you to a local resource you can contact for help'}
      />

      <ResultCard
        imgUrl={'http://www.hawaiiexecutivetransportation.com/WebObjects/HETSWebApp_1.woa/Contents/WebServerResources/images/mercedes-sprinter-van4.png'}
        title={'American Parkinson&#39;s Disease Association (APDA) Ride Repay Program'}
        url={'http://www.vets-go.com/provider/american-parkinsons-disease-association-apda-ride-repay-program'}
        phone={'2066952905'}
        content={'Use the transportation of your choice to go to a doctor&#39;s appointment,visit a friend, or where ever you wish (no limitations on your travel). APDA will reimburse you up to $300 per year for eligible travel expenses such as taxi, bus, ferry, or rail fare or gasoline expenses. Fill out the application at APDA website or call 206-695-2905. In order to be eligible, you must have a Parkinson&#39;s diagnosis'}
    />

    <ResultCard
      imgUrl={'http://www.hawaiiexecutivetransportation.com/WebObjects/HETSWebApp_1.woa/Contents/WebServerResources/images/mercedes-sprinter-van4.png'}
      title={'American Parkinson&#39;s Disease Association (APDA) Ride Repay Program'}
      url={'http://www.vets-go.com/provider/american-parkinsons-disease-association-apda-ride-repay-program'}
      phone={'2066952905'}
      content={'Use the transportation of your choice to go to a doctor&#39;s appointment,visit a friend, or where ever you wish (no limitations on your travel). APDA will reimburse you up to $300 per year for eligible travel expenses such as taxi, bus, ferry, or rail fare or gasoline expenses. Fill out the application at APDA website or call 206-695-2905. In order to be eligible, you must have a Parkinson&#39;s diagnosis'}
  />

  <ResultCard
    imgUrl={'http://www.hawaiiexecutivetransportation.com/WebObjects/HETSWebApp_1.woa/Contents/WebServerResources/images/mercedes-sprinter-van4.png'}
    title={'American Parkinson&#39;s Disease Association (APDA) Ride Repay Program'}
    url={'http://www.vets-go.com/provider/american-parkinsons-disease-association-apda-ride-repay-program'}
    phone={'2066952905'}
    content={'Use the transportation of your choice to go to a doctor&#39;s appointment,visit a friend, or where ever you wish (no limitations on your travel). APDA will reimburse you up to $300 per year for eligible travel expenses such as taxi, bus, ferry, or rail fare or gasoline expenses. Fill out the application at APDA website or call 206-695-2905. In order to be eligible, you must have a Parkinson&#39;s diagnosis'}
/>

          </Card.Group>
        </div>
      </div>
      </div>
    );
  }
}

export default SearchForm;
