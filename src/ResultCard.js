import React, { Component } from 'react'
import { Form, Header, Container, Divider, Grid, Button, Checkbox, Menu, Sticky, Card, Image, Icon } from 'semantic-ui-react'
import SimpleForm  from './MyGoogleSuggest';
import CardBottom  from './CardBottom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery'

class ResultCard extends Component {

  render() {
    console.log(this.props);
      return (
        <Card>
        <Image src={this.props.imgUrl} />
        <Card.Content>
          <Card.Header>
          <a
          href="{props.url}" target="_blank">{this.props.title}
          </a>

          </Card.Header>
          <Card.Meta>

          <a href={"tel:"+this.props.phone}>
          <Icon name='volume control phone' size='large' />
          {this.props.phone}
          </a>

          </Card.Meta>
          <Card.Description>
          {this.props.content}
            <a
            href="{prop.url}" target="_blank">
            Offical Information</a>


          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="buttonGroups">
       <Button color='instagram'  size='huge' className="customerButton">
         <Icon name='thumbs outline up' />
         <span classNames="white">Request Ride</span>
       </Button>
       <Button  color='youtube'  size='huge' className="customerButton">
       <Icon name='volume control phone' size='large' />
       <a href={"tel:"+this.props.phone} className="white">{this.props.phone}</a>
       </Button>
      </div>
          <CardBottom rating={this.props.rating}/>

        </Card.Content>
        </Card>
    );
  }
}

export default ResultCard;
