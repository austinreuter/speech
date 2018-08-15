import React, {Component} from 'react';
const axios = require('axios');

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { response: '' }
	}
	hello() {

	}
	componentDidMount() {
		console.log('hi from app')
		this.callApi() 
		  .then(res => this.setState({response: res.express}))
		  .then((res) => {
		  	console.log('hi', res)
		  })
		// call some this.function 
	}
  render () {
  	return <p> hello /* run function from server */ </p>


  }
}