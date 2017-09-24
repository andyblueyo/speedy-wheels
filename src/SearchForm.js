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
  { key: 'PersonalCareAttendant', text: 'Personal Care Attendant', value: 'PersonalCareAttendant' },
  { key: 'Walker', text: 'Walker', value: 'Walker'}


]

class SearchForm extends Component {
  state = {showMenuInfo: true, showEmailAddress: false, showPhoneNumber: false, value:{}, listOfServices: services_json.services}
  constructor(props) {
     super(props);
     this.onChangeOrigin = this.onChangeOrigin.bind(this);
     this.onChangeDestination = this.onChangeDestination.bind(this);
     this.toggleBar = this.toggleBar.bind(this);
     this.handleChange = this.handleChange.bind(this);

   }

  handleChange = (e, { value }, nameTag) => {
    console.log("onchange", e, value,"name", e.target.name);
    var originalVal = this.state.value;
    var nameAtr = e.target.name || '';
    if(!nameAtr && nameTag){
      nameAtr = nameTag;
    }
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
    this.setState({listOfServices: results});
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

  toggleBar(){
    console.log(this.state.showMenuInfo);
    this.setState({showMenuInfo: !this.state.showMenuInfo})
  }
  render() {
    const { value } = this.state
    const { contextRef } = this.state
console.log("services_json", services_json);
const serversData = services_json.services || [];
      return (
        <div>
          {/* <Sticky className="myCustomerHeaders"> */}
            <Menu size='massive'  className="myCustomerHeaders" fixed="top" className="headerA">
              <div onClick={this.toggleBar}>
                <div className="textHeader">
              <Menu.Header as='h2' icon='search'
                 content='Submit to request a ride'
                  className="myCustomerHeaders titleA"/>
                </div>
              </div>
          <Menu.Menu position='right'  className="myCustomerHeaders">
            <Menu.Item>
              <Button color="blue">
                <a href="/" className="white">
              Request&nbsp;&nbsp;

              <Icon name='chevron right'></Icon>
            </a>
            </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <div></div>
        {this.state.showMenuInfo &&
          <Menu size='massive' className="marginTop60">
<div className="buttonGroups">
            <Menu.Header as='h2' icon='search' content='What is requesting?'/>
            <div className="infoHeader">
              <p>Requesting is a process where Speedy Wheels will send an email to selected ride services to contact organizations about the availability of the service. Organizations will work with the given information such as destination and time to determine if they will be able to provide the requested service. </p>
              <p></p>
              <p>Select ride services by clicking “Add to List”. Ride services will be added to the list of organizations to contact. By clicking “Request”, Speedy Wheels will contact the selected organizations on your behalf. Organizations will receive an email request and will follow up with a call or email within two business days. Requesting a trip is a free service provided by Speedy Wheels. Payment of transportation will be determined by each individual organization.</p>
            </div>
</div>
          <Menu.Menu position='right'>
          <Menu.Item>
            <Button color="blue" onClick={this.toggleBar}>
              <a href="/" className="white">
            Close&nbsp;&nbsp;

            <Icon name='delete'></Icon>
          </a>
          </Button>
          </Menu.Item>
          </Menu.Menu>
          </Menu>
        }

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
            <Button size='medium'>
              A
            </Button>
            <Button size='huge'>
              A
            </Button>
          </div>
          <div className="textButtons">
          <label>Change language</label>
          <span className="spanMarign"></span>
            <Button size='medium'>
              Español
            </Button>
            <Button size='medium'>
              Swahili
            </Button>
            <Button size='medium'>
              Tiếng Việt
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
        <Checkbox label='Will need return trip' name="isReturnTrip"  onChange={this.handleChange}/>


        <Form.Select label='Age' name="age" options={options} placeholder='Select your age' onChange={(e, {value}) => this.handleChange(e, {value}, 'age')} />
        <label>Accessibility Needs</label>
        <Dropdown placeholder='Select all that apply' fluid multiple search selection options={Mobilityoptions} />
        <Checkbox label='Is this for a medical trip?' name="isMedicalTrip"  onChange={this.handleChange}/>
        <Checkbox label='Are you blind/visually impaired?' name="isImpaired"  onChange={this.handleChange}/>
        <Checkbox label='Do you require door to door service?' name="isDoorServer"  onChange={this.handleChange}/>
          <Form.Button>Submit</Form.Button>
          <Divider horizontal></Divider>
          <Menu.Header as='h3' icon='alarm outline' content='Please let us know if you need any help.' className=""/>

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
      {this.state.listOfServices.map((x, index) =>
        <ItemCard
          imgUrl={'http://www.kirklandwa.gov/Assets/Senior+Center+Van.jpg'}
          title={x.shuttlenam}
          url={x.website}
          phone={x.phone}
          content={x.info}
          rating={x.rating}
          requirements={x.requirements || {}}
          index={index}
        />

      )}
        </Item.Group>

        </div>
      </div>
      </div>
    );
  }
}

export default SearchForm;
