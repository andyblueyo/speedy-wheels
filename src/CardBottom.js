import React, { Component } from 'react'
import { Form, Header, Container, Divider, Grid, Button, Checkbox, Menu, Sticky, Card, Image, Icon, Rating } from 'semantic-ui-react'
import SimpleForm  from './MyGoogleSuggest';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery'


class CardBottom extends Component {

  render() {
      return (

          <Grid divided='vertically'  className="buttonGrid">
   <Grid.Row columns={2}>
     <Grid.Column className="gridColumn">
       {/* <a className="buttonIcons">
         <Icon name='thumbs outline up' />

       </a> */}
       <Rating icon='star' defaultRating={3} maxRating={5} />
       <span className="ratingText">4.5</span>
     </Grid.Column>
     <Grid.Column  className="gridColumn">
       <a className="buttonIcons">
         <Icon name='user' />
         20 User
       </a>
     </Grid.Column>
     {/* <Grid.Column>
       <a>
         <Icon name='user' />
         100 users
       </a>
     </Grid.Column> */}
   </Grid.Row>
 </Grid>

    );
  }
}

export default CardBottom;
