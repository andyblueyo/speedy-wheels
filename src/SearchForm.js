import React, { Component } from 'react'
import { Dropdown, Form, Header, Container, Divider, Grid, Button, Checkbox, Menu, Sticky, Card, Image, Icon, Item, Label } from 'semantic-ui-react'
import SimpleForm  from './MyGoogleSuggest';
import CardBottom  from './CardBottom';
import ResultCard from './ResultCard';
import ItemCard from './ItemCard';
import MyMap from './MyMap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
var services_json = require('./services.json');
const position = [51.505, -0.09];
const stateOptions = [ { key: 'isMedicalTrip', value: 'isMedicalTrip', text: 'Is this for a medical trip?' },
{ key: 'isImpaired', value: 'isImpaired', text: 'Are you blind/ visually impaired?' },
{ key: 'isDoorServer', value: 'isDoorServer', text: 'Do you require door to door service?' },
  ];
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

    var results = [];

    for (var service_i in services_json.services) {
      var service = services_json.services[service_i]
      var actual_zips = new Set([])

      if (service.associated_hoods == "all") {

        for (var hood_i in services_json.associated_zips) {
          var hood = services_json.associated_zips[hood_i]

          for (var zip_i in hood) {
            actual_zips.add(hood[zip_i])
          }
        }

      } else {

        for (var hood_i in service.associated_hoods) {
          var hood = service.associated_hoods[hood_i]

          for (var zip_i in services_json.associated_zips[hood]) {
            actual_zips.add(services_json.associated_zips[hood][zip_i])
          }

        }

      }

      if ((actual_zips.has(this.state.value.origin.zipCode)) && (actual_zips.has(this.state.value.destination.zipCode))) {
        results.push(service)
      }
    }
    
    console.log("eva: results", results)

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
      console.log("de", this.state.value.destination);
  }
  handleContextRef = contextRef => this.setState({ contextRef })
  render() {
    const { value } = this.state
    const { contextRef } = this.state
console.log("services_json", services_json);
const serversData = services_json.services || [];
      return (
        <div>
          {/* <Sticky className="myCustomerHeaders"> */}
            <Menu size='massive'  className="myCustomerHeaders" fixed="top" className="headerA">
              <Menu.Item name='' width={'200'}  className="myCustomerHeaders"/>
              <Menu.Header as='h2' icon='search' content='Request Shuttle' className="myCustomerHeaders"/>
          <Menu.Menu position='right'  className="myCustomerHeaders">
            <Menu.Item>
              <Button color="blue">
                <a href="/" className="white">
              Visit&nbsp;&nbsp;

              <Icon name='chevron right'></Icon>
            </a>
            </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      {/* </Sticky> */}
      <div className="wrapper marignTop80"  ref={this.handleContextRef}>
        {/* <div className="tempBackground"> */}
        <Sticky context={contextRef} offset="80" className="stickeySidebar" bottomOffset="0" onStick={(event, data) => console.log("onStick", event, data)}>

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
        <label>Trip Date</label>
        <input type="datetime-local" name="fromTime" onChange={this.handleChange} />
        <Checkbox label='Is Return Trip' name="isReturnTrip"  onChange={this.handleChange}/>


        <Form.Select label='Age' name="age" options={options} placeholder='Gender' onChange={this.handleChange} />
        <Dropdown placeholder='Mobility' fluid multiple search selection options={stateOptions} />
          <Form.Button>Submit</Form.Button>
          <Divider horizontal></Divider>
          <Menu.Header as='h3' icon='alarm outline' content='Please let us know if you need any help' className=""/>

      </Form>
      </div>
    </Sticky>
  {/* </div> */}
      <div className="customerResult">
        <MyMap/>
        <Menu size='massive'  className="myCustomerHeaders">
        <Menu.Menu position='right'  className="rightButton">
          <Menu.Item>
            <Button color='green'>
              <Icon name='print' />

              <a href="/" className="white">
            Print Friendly &nbsp;&nbsp;
          </a>
          </Button>
          </Menu.Item>
        </Menu.Menu>
    </Menu>
    <Item.Group divided>
      {serversData.map(x =>
        <ItemCard
          imgUrl={'http://www.kirklandwa.gov/Assets/Senior+Center+Van.jpg'}
          title={x.operator}
          url={x.website}
          phone={x.phone}
          content={x.info}
          rating={x.rating}
        />

      )}
                <ItemCard
                  imgUrl={'http://www.kirklandwa.gov/Assets/Senior+Center+Van.jpg'}
                  title={'Kirkland Senior Van'}
                  url={'http://www.kirklandwa.gov/depart/parks/About_Parks_and_Community_Services/Senior_Services/Van_Service_Trip.html'}
                  phone={'4255873363'}
                  content={'The Peter Kirk Community Center offers a variety of fun day trips.From visits to beautiful gardens and nurseries to museums, casinos, zoos and boat trips, there is always an adventure just right for you! For a complete listing of trips refer to the Parks& Community Services Quarterly Activity Guide.'}
                />

                          <ItemCard
                            imgUrl={'http://www.kirklandwa.gov/Assets/Senior+Center+Van.jpg'}
                            title={'Kirkland Senior Van'}
                            url={'http://www.kirklandwa.gov/depart/parks/About_Parks_and_Community_Services/Senior_Services/Van_Service_Trip.html'}
                            phone={'4255873363'}
                            content={'The Peter Kirk Community Center offers a variety of fun day trips.From visits to beautiful gardens and nurseries to museums, casinos, zoos and boat trips, there is always an adventure just right for you! For a complete listing of trips refer to the Parks& Community Services Quarterly Activity Guide.'}
                          />
</Item.Group>

        </div>
      </div>
      </div>
    );
  }
}

export default SearchForm;
