const express = require('express')
const bodyParser = require('body-parser');
const path = require('path'); 
const axios = require('axios');
const Promise = require('bluebird');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.urlencoded({extended: true})); 
// ^ accept API.objects// parse custom json as json

// TODO.. 
/* SETUP
//   dist bundle file DONE
//   serve static html
//   dynamically watch html file
  //  set up body parser for parsed txt, object DONE
  //  install testing software, 
    // create first node test
*/
// ROUTES
// create route folder/file
// AJAX - axios [bluebird for promises, both client-server] DONE
  // pass info from react./.html to node/express

app.use(
	express.static(path.join(__dirname + '/../client/dist'))
  );

app.get('/', (req, res) => {
  Promise.resolve()
    .then(() => console.log('hi from server'))
    .then(() => res.send('Hello World!'))
});
app.post('/', (req, res) => {
	console.log(req.body)
  Promise.resolve()
    .then(() => {
      console.log(req.body)
      res.send('successfully posted to server')
    })
});
app.post('/api', (req, res) => {
	res.send({express: 'hello from express'});
});


app.listen(port, () => console.log(`app listening on port ${port}!`));