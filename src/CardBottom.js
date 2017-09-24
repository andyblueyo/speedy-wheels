import React, { Component } from 'react'
import { Form, Header, Container, Divider, Grid, Button, Checkbox, Menu, Sticky, Card, Image, Icon } from 'semantic-ui-react'
import SimpleForm  from './MyGoogleSuggest';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery'


class CardBottom extends Component {

  render() {
      return (

          <Grid divided='vertically'>
   <Grid.Row columns={3}>
     <Grid.Column>
       <a>
         <Icon name='thumbs outline up' />
         10 Votes
       </a>
     </Grid.Column>
     <Grid.Column>
       <a>
         <Icon name='thumbs down' />
         20 Votes
       </a>
     </Grid.Column>
     <Grid.Column>
       <a>
         <Icon name='user' />
         1,000 users
       </a>
     </Grid.Column>
   </Grid.Row>
 </Grid>

    );
  }
}

export default CardBottom;
