import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
constructor(){
    super()
    this.state={
        name: '',
        price: 0,
        img: ''
    }
    this.baseState = this.state
}


//methods 
handleChangeName = (val) => {
    this.setState({
        name: val
    })
    console.log(this.state.name)
    console.log(this.baseState)
}

handleChangePrice = (val) => {
    this.setState({
        price: val
    })
    console.log(this.state.price)
    console.log(this.baseState)
}

handleChangeImg = (val) => {
     this.setState({
         img: val
     })
     console.log(this.state.img)
     console.log(this.baseState)
}

postNew = () => {
    axios.post('/api/product', {name: this.state.name, price: this.state.price, img: this.state.img})
    .then(res => {
        this.setState({
            state: res.data
        })
    })
    .catch(err =>{
        console.log(err)
    })
        this.setState({ name: ''})
            this.setState({price:0})
                this.setState({img: ''})
}

clearInputs = () => {
 this.setState(this.baseState)
//  this.setState({
//      name: '',
//      price:0,
//      img:''
//  })
}

    render() {
        return (
            <div>
                <input 
                onChange={(e)=>this.handleChangeName(e.target.value)} 
                value={this.state.name}></input>

                <input 
                onChange={(e)=>this.handleChangePrice(e.target.value)} 
                value={this.state.price}></input>
                
                <input 
                onChange={(e)=>this.handleChangeImg(e.target.value)} 
                value={this.state.img}></input>

                <button onClick={this.clearInputs}>Cancel</button>
                <button onClick={this.postNew}>Add to Inventory</button>


            </div>
        )
    }
}
