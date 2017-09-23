import React, { Component } from 'react'
import { Form, Header, Container } from 'semantic-ui-react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';
// const options = [
//   { key: '45', text: '45+', value: '45' },
//   { key: '65', text: '65+', value: '65' },
// ]

function findServices() {

  return 'hi';
}

class RequestForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

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
        <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    );
  }
}

export default RequestForm;
