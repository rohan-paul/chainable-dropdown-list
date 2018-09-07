const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors');
// require ('dotenv').config();

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: false}));

const Car = require('./models/Car')
const car = require('./routes/cars')


// config to connect to mLab . MongoURI (Represents a URI which can be used to create a Mongo instance. The URI describes the hosts to be used and options.
const db = require('./config/keys').mongoURI;

//connect mongoose to my MongoDB. connect() function also accepts a callback parameter and returns a promise. (as a note, remain careful about using ES6 syntax with mongoose as it gives some problems sometime). Note I am passing the db variable defined above to connect()

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connection established"))
  .catch(err => console.log(err))


// Code to be able to run the server in Heroku. Locally the Express server runs on 5000 - and create-react-app server runs on 3000. I need to combine them to run both in one command. Thats why I need to run npm run build and point to the file ..client/build/index.html from server.js. But ultimately the build folder will be created by Heroku, only for production env. And so I will never need the build folder for development. Thats why its gitignor-ed as well.

app.use('/', car);

if (process.env.NODE_ENV === 'production') {
  // first set static folder for production env
  app.use (express.static('client/build'));

  // Then for any route that gets hit here in production, load the index.html file
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Given I will deploy it in Heroku, I shall use process.env.port but locally my app will run on port 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
