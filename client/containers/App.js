import React, {Component} from 'react';
const axios = require('axios');
const Promise = require('bluebird');

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			msg: '' 
		};
	}
	callApi() {
    axios.post('/api', {name: 'austin', msg: 'gucci'})
      .then((msg) => {
        console.log('axios post', msg)
      })
  }
	componentDidMount() {
    axios.post('/api', {name: 'austin', msg: 'gucci'})
      .then((msg) => {
        console.log('axios post', msg)
        return this.setState({msg: msg.data})
      })
      .then(() => {
      	console.log(typeof this.state.msg, this.state.msg)
      })
      .catch((err) => console.log('err on post...', err))
	}
  render () {
  	return <div>
  	  <p> hi from react </p>
  	  <button> {this.state.msg.express} </button>
    </div>

  }
}