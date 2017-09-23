import React, { Component } from 'react'
import { Form, Header, Container } from 'semantic-ui-react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery'
// const options = [
//   { key: '45', text: '45+', value: '45' },
//   { key: '65', text: '65+', value: '65' },
// ]

class RequestForm extends Component {
  state = {}

  handleChange = (e, { value }) => {
      this.setState({ value })
  }

    // var data = [1, 2,];

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

  render() {
    const { value } = this.state
      return (
        <div className="smallBox">
        <Header as='h2' icon='bus' content='Request Shuttle' />

        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='Full name' placeholder='Full name' />
            <Form.Input label='Last name' placeholder='Last name' />
            <Form.Input label='Age' placeholder='Age' />
          </Form.Group>
          <Form.Group inline>
            <label>Notifications</label>
            <Form.Radio label='Small' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
            <Form.Radio label='Medium' value='md' checked={value === 'md'} onChange={this.handleChange} />
            <Form.Radio label='Large' value='lg' checked={value === 'lg'} onChange={this.handleChange} />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Comments...' />
          <Form.Button onSubmit={console.log(this.processRequest())}>Submit</Form.Button>
          //<Form.Button onSubmit={this.handleSubmit}>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default RequestForm;
