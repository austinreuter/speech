import React, {Component} from 'react';
const axios = require('axios');
const Promise = require('bluebird');

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { response: '' }
	}
	async callApi() {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
	componentDidMount() {
    axios.post('/', {name: 'austin', msg: 'gucci'})
    .then((msg) => {
      console.log('axios post', msg)
    })
    .then(() => {
      this.callApi(res)
      .then(res => this.setState({response: res}))
        .then((msg) => console.log('allApi res...', res))
        .catch((err) => console.log('err apisetstate...', err))
    })
    .catch((err) => console.log('err on post...', err))

	}
  render () {
  	return <p> {this.state.response} /* run function from server */</p>


  }
}