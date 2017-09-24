import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery';
import { Form, Header, Container, Divider, Grid } from 'semantic-ui-react';

class Results extends Component {
  render() {
      console.log(this.props.data[0]);
      return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>{this.props.data[0]}King County Transit</h2>
                        <Header as='h3' icon='user' content='We will pick you up at: 4560 34th Ave S, Seattle, WA 98118' />
                        <Header as="h3" icon='book' content='ORCA lift: $3.00 - $3.75' />
                        <div className="row">
                        <div className="col-md-6">
                            <Header as='h3' icon='phone' content='203-384-2929' />
                        </div>
                        <div className="col-md-6">
                            <Header as='h3' icon='envelope' content='watertaxi@gmail.com' />
                        </div>
                        </div>
                        <br/>
                        <div className="row">
                        <div className="col-md-6">
                            <button className="btn-default btn-lg">Add to Ride List</button>
                        </div>
                        <div className="col-md-6">
                            <button className="btn-default btn-lg">Learn to Ride</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Results;
