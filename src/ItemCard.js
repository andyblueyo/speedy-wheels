import React, { Component } from 'react'
import {Label, Item,Form, Header, Container, Divider, Grid, Button, Checkbox, Menu, Sticky, Card, Image, Icon } from 'semantic-ui-react'
import SimpleForm  from './MyGoogleSuggest';
import CardBottom  from './CardBottom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery'

class ResultCard extends Component {

  render() {
    // console.log(this.props);
      return (
        <Item>
          <Item.Image src={this.props.imgUrl} />

          <Item.Content>
            <Item.Header as='a'>{this.props.title}</Item.Header>
            <Item.Meta>
              <a href={"tel:"+this.props.phone}>
              <Icon name='volume control phone' size='large' />
              {this.props.phone}
              </a>
            </Item.Meta>
            <Item.Description>{this.props.content}</Item.Description>
            <Item.Extra>
              <div className="buttonGroupsH">
           <Button color='instagram'  size='medium' className="customerButtonA">
             <Icon name='plus' />
             <span classNames="white">Add List</span>
           </Button>
           <Button  color='olive'  size='medium' className="customerButtonA">
           <Icon name='book' size='large' />
           <span classNames="white">Lear to Ride</span>

           </Button>
          </div>
              <Label>Limited</Label>
              <Label>Afforadable</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
    );
  }
}

export default ResultCard;
