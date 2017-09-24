import React, { Component } from 'react'
import { Modal, Icon, Form, Header, Container, Divider, Grid, Button } from 'semantic-ui-react'
import SimpleForm  from './MyGoogleSuggest';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
const position = [51.505, -0.09];

class RequestForm extends Component {
  state = {showEmailAddress: false, showPhoneNumber: false, value:{}, open: false}
  constructor(props) {
     super(props);
    this.state = {showEmailAddress: false, showPhoneNumber: false, showResults: false, result: {}}
     this.onChangeOrigin = this.onChangeOrigin.bind(this);
     this.onChangeDestination = this.onChangeDestination.bind(this);
   }
  handleChange = (e, { value }) => {
    var originalVal = this.state.value;
    var nameAtr = e.target.name || '';
    if(nameAtr){
      console.log("originalVal", originalVal);

      originalVal[nameAtr] = value;
      this.setState({ value:originalVal })
    }
  }

    // processRequest = () => {
    //   const lat = 47.559440;
    //   const long = -122.363188;
    //
    //   const tempPoint = {
    //     type: 'Point',
    //     coordinates: [
    //       long,
    //       lat
    //     ]
    //   };
    //
    //   return this.getResponse(lat, long);
    // }
    //
    // getResponse = (lat, long) => {
    //   let constructed_url = "https://data.kingcounty.gov/resource/xhy5-rgaa.json?$where=intersects(the_geom, 'POINT ("
    //   constructed_url += long.toString()
    //   constructed_url += " "
    //   constructed_url += lat.toString()
    //   constructed_url += ")')"
    //
    //   $.ajax({
    //     //https://data.seattle.gov/resource/n99g-k8uj.json?$where=intersects(the_geom,%20%27POINT%20(-122.4218242%2047.662893)%27)
    //     url: constructed_url,
    //     type: "GET",
    //     data: {
    //       "$limit" : 5000,
    //       "$$app_token" : "ZblfCkOVREKx1lb1pdaqTTYud"
    //     }
    //   }).done(function(data) {
    //     console.log(data);
    //     //console.log("eva: data" ,data);
    //   });
    // }
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
        dataType: 'json',
        data: {
          "$limit" : 5000,
          "$$app_token" : "ZblfCkOVREKx1lb1pdaqTTYud"
        },
        success: function (data) {
          this.setState({result: data});
        }.bind(this)
      });
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
    this.setState({showResults: !this.state.showResults});
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
  show =() => () => this.setState({  open: true })
 close = () => this.setState({ open: false })
  render() {
    const { value } = this.state
      return (
        <div>
        <div className="smallBox">
        <div>
          <Header as='h2' icon='bus' content='Request Shuttle' textAlign="center" />
          <div className="textButtons">
          {/*<label>Text Size</label>*/}
          {/*<span className="spanMarign"></span>*/}
            {/*<Button size='tiny'>*/}
              {/*A*/}
            {/*</Button>*/}
            {/*<Button size='small'>*/}
              {/*A*/}
            {/*</Button>*/}
            {/*<Button size='medium'>*/}
              {/*A*/}
            {/*</Button>*/}
          </div>
        </div>
        <Form onSubmit={ (e, { value }) => {this.handleSubmit(e, { value }); this.show()}}>
        <Divider horizontal>Basic Information</Divider>
        <Grid columns='two'>
            {/*<Grid.Row>*/}
              {/*<Grid.Column>*/}
                {/*<Form.Field>*/}
                  {/*<label>From</label>*/}
                  {/*<SimpleForm onChange={this.onChangeOrigin} placeholder={'RangeWhere are you starting from?'}/>*/}
                {/*</Form.Field>*/}
              {/*</Grid.Column>*/}
              {/*<Grid.Column>*/}
                {/*<Form.Field>*/}
                  {/*<label>To</label>*/}
                  {/*<SimpleForm onChange={this.onChangeDestination} placeholder={'Where would you like to go?'}/>*/}
                {/*</Form.Field>*/}
              {/*</Grid.Column>*/}
            {/*</Grid.Row>*/}
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label>First Name</label>
                  <Form.Input placeholder='First name'  name="firstName" onChange={this.handleChange} />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <label>Last Name</label>
                  <Form.Input placeholder='Last name'  name="lastname" onChange={this.handleChange} />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form.Field>
                <label>Phone Number</label>
                <Form.Input placeholder='Phone Number'  name="phonenumber" onChange={this.handleChange} />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          </Grid>
        <Divider horizontal></Divider>
          <label>Notifications</label>
            <Form.Radio label='Text' value='sm' checked={value === 'sm'} onChange={(e, { value }) => {this.handleChange(e, { value }); this.tooglePhoneForm()}} />
            <Form.Radio label='Phone Call' value='lg' checked={value === 'lg'} onChange={(e, { value }) => {this.handleChange(e, { value }); this.tooglePhoneForm()}} />
            {this.state.showPhoneNumber&&
              <div>
                <Form.Input label='' placeholder='Phone' onChange={this.handleChange} />
              </div>
            }
            <Form.Radio label='Email' value='md' checked={value === 'md'} onChange={(e, { value }) => {this.handleChange(e, { value }); this.toggleEmailForm()}} />
            {this.state.showEmailAddress&&
              <div>
                <Form.Input label='' placeholder='Email'  onChange={this.handleChange}/>
              </div>
            }
          {/*<Divider horizontal>Other</Divider>*/}
          {/*<label className="spanMarign">About</label>*/}
          {/*<Form.TextArea label='' placeholder='Comments...' className="TextAreaFulLWidth" />*/}

          <Form.Button>Submit</Form.Button>
          </Form>
      </div>
      <div className="customerResult">
        <Modal size={'tiny'} open={this.state.open} onClose={this.close}>
              <Modal.Header>
                Your Information Has been Sent.
                {/* {this.state.value.email && <div>You send email to {this.state.value.email}</div>} */}
              </Modal.Header>
              <Modal.Content>
                <Icon circular name='check' color="green" size='big' />
              </Modal.Content>
              <Modal.Actions>
                {/* <Button negative>
                  No
                </Button> */}
                <Button positive icon='checkmark' labelPosition='right' content='Close' />
              </Modal.Actions>
            </Modal>
      </div>

      </div>
    );
  }
};

export default RequestForm;
