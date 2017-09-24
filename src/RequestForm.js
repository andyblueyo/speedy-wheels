import React, { Component } from 'react'
import { Form, Header, Container, Divider, Grid, Button } from 'semantic-ui-react'
import SimpleForm  from './MyGoogleSuggest';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
const position = [51.505, -0.09];

class SearchForm extends Component {
  state = {showEmailAddress: false, showPhoneNumber: false}

  handleChange = (e, { value }) => {
      this.setState({ value })
  }

    processRequest = () => {
      const lat = 47.559440;
      const long = -122.363188;

      const tempPoint = {
        type: 'Point',
        coordinates: [
          long,
          lat
        ]
      };

      return this.getResponse(lat, long);
    }

    getResponse = (lat, long) => {
      let constructed_url = "https://data.kingcounty.gov/resource/xhy5-rgaa.json?$where=intersects(the_geom, 'POINT ("
      constructed_url += long.toString()
      constructed_url += " "
      constructed_url += lat.toString()
      constructed_url += ")')"

      $.ajax({
        //https://data.seattle.gov/resource/n99g-k8uj.json?$where=intersects(the_geom,%20%27POINT%20(-122.4218242%2047.662893)%27)
        url: constructed_url,
        type: "GET",
        data: {
          "$limit" : 5000,
          "$$app_token" : "ZblfCkOVREKx1lb1pdaqTTYud"
        }
      }).done(function(data) {
        console.log(data);
        //console.log("eva: data" ,data);
      });
    }

    handleSubmit = (e, { value }) => {
      console.log("eva: e", e)
        console.log("eva: value", value)
        if(this.state.showEmailAddress){
          console.log("sending request!");
          $.ajax({
            url: "http://localhost:4200/sendemail",
            type: "GET",
            data: {
              "$limit" : 5000,
              "$$app_token" : "ZblfCkOVREKx1lb1pdaqTTYud"
            }
          }).done(function(data) {
            // console.log(data);
            //console.log("eva: data" ,data);
          });

        }
        var request = {}
        request.name = "Eva"
        request.origin = "4560 34th Ave S, Seattle, WA 98118"
        request.destination = "325 9th Ave, Seattle, WA 98104"
        request.age = 65
        request.date = "2017/10/02"
        request.time = "10:00:00"
        request.ifNeedReturn = true
        request.ifMedicalApt = false
        console.log("eva: handleSubmit",this.getResponse(request))
    }
  toggleEmailForm=()=>{
    this.setState({showEmailAddress: !this.state.showEmailAddress});
  }

  tooglePhoneForm= ()=>{
    this.setState({showPhoneNumber: !this.state.showPhoneNumber});
  }

  onChangeOrigin(data){
      console.log("onChangeDestination Data", data);
  }

  onChangeDestination(data){
      console.log("onChangeDestination Data", data);
  }
  render() {
    const { value } = this.state
      return (
        <div>
        <div className="smallBox">
        <div>
          <Header as='h2' icon='bus' content='Request Shuttle' />
          <div>
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
        <Form.Group widths='equal'>
        <Divider horizontal>Basic Information</Divider>
        <Grid columns='two' divided>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label>From</label>
                  <SimpleForm onChange={this.onChangeOrigin}/>
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <label>To</label>
                  <SimpleForm onChange={this.onChangeDestination}/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label>First Name</label>
                  <Form.Input placeholder='First name' />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <label>Last Name</label>
                  <Form.Input placeholder='Last name' />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form.Group>
        <Divider horizontal></Divider>

          <Form.Group>
          <label>Notifications</label>
            <Form.Radio label='Text' value='sm' checked={value === 'sm'} onChange={(e, { value }) => {this.handleChange(e, { value }); this.tooglePhoneForm()}} />
            <Form.Radio label='Phone Call' value='lg' checked={value === 'lg'} onChange={(e, { value }) => {this.handleChange(e, { value }); this.tooglePhoneForm()}} />
            {this.state.showPhoneNumber&&
              <div>
                <Form.Input label='' placeholder='Phone' />
              </div>
            }
            <Form.Radio label='Email' value='md' checked={value === 'md'} onChange={(e, { value }) => {this.handleChange(e, { value }); this.toggleEmailForm()}} />
            {this.state.showEmailAddress&&
              <div>
                <Form.Input label='' placeholder='Email' />
              </div>
            }
          </Form.Group>

          <Form.Group>
          <Divider horizontal>Other</Divider>
          <label className="spanMarign">About</label>
          <Form.TextArea label='' placeholder='Comments...' className="TextAreaFulLWidth" />
          </Form.Group>

          <Form.Button onSubmit={console.log(this.processRequest())}>Submit</Form.Button>
      </div>
      <div className="customerResult">

      </div>
      </div>
    );
  }
}

export default SearchForm;
