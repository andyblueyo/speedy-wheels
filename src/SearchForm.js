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
        // console.log("eva: handleSubmit",this.getResponse(request))
    }
  toggleEmailForm=()=>{
    this.setState({showEmailAddress: !this.state.showEmailAddress});
  }

  tooglePhoneForm= ()=>{
    this.setState({showPhoneNumber: !this.state.showPhoneNumber});
  }

  onChangeOrigin(data){
      console.log("onChangeDestination Data", data);
      console.log(this.state);
      var originalVal = this.state.value || {};
      originalVal["origin"] = data;
      this.setState({value:originalVal });
  }

  onChangeDestination(data){
      console.log("onChangeDestination Data", data);
      console.log(this.state);

      var originalVal = this.state.value || {};
      originalVal["destination"] = data;
      this.setState({value:originalVal });
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
        <Form onSubmit={this.handleSubmit}>
        <Divider horizontal>Basic Information</Divider>
        <Grid columns='One'>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label>From</label>
                  <SimpleForm onChange={this.onChangeOrigin} placeholder={'RangeWhere are you starting from?'}/>
                </Form.Field>
              </Grid.Column>

            </Grid.Row>
            <Grid.Row>

              <Grid.Column>
                <Form.Field>
                  <label>To</label>
                  <SimpleForm onChange={this.onChangeDestination} placeholder={'Where would you like to go?'}/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        <Divider horizontal></Divider>
        <label>From</label>

        <input type="datetime-local"/>
        <label>To</label>

        <input type="datetime-local"/>
          <Form.Button>Submit</Form.Button>
          </Form>
      </div>
      <div className="customerResult">

      </div>
      </div>
    );
  }
}

export default SearchForm;
