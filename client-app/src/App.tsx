import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './App.css';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  state = {
    values: []
  };

  componentDidMount() {
    try
    {
    axios.get('http://localhost:5000/API/Values')
       .then(response => {
         this.setState({
           values: response.data
       })         
      });
    }
    catch 
    {
      //response => values: [{id: -1, name: 'Error'}];
    }
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>React1</Header.Content>
        </Header>    
        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>      
      </div>
    );
  };

}

export default App;
