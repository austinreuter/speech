import React, {Component} from 'react';
const axios = require('axios');
const Promise = require('bluebird');

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { response: '' }
	}
	callApiSetState() {
    this.callApi() 
		  .then(res => this.setState({response: res.express}))
		  .then((res) => {
		  	console.log('hi from client callApi', res)
		 });
	}
	componentDidMount() {
    axios.post('/', {name: 'austin', msg: 'gucci'})
    .then((msg) => {
      console.log('axios post', msg)
    })
    .then(() => {
      return this.callApiSetState()
        .catch((err) => console.log('err apisetstate...' err))
    })
    .catch((err) => console.log('err on post...', err))

	}
  render () {
  	return <p> hello /* run function from server */ </p>


  }
}