import React, { Component } from 'react'

import Form from './components/Form/Form';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';

import axios from 'axios';


    




export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount () {
    this.getInventory()
  }

  getInventory() {
    axios.get('/api/inventory')
    .then(res => this.setState({inventory: res.data}))
  }

  render() {
   
    return (
      <div>
        <Header/>
        <Form getInventory={this.getInventory }/>
        <Dashboard inventory={this.state.inventory }/>
     

    
      </div>
    )
  }
}
