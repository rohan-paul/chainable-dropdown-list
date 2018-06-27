import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

var filterData = [

  { name: 'Bill Gates', carMake: 'Ford', model: 'Edge' },
  { name: 'Steeve Woz', carMake: 'Acura', model: 'ILX' },
  { name: 'Steve Jobs', carMake: 'Ford', model: 'Escape' },
  { name: 'Mark Zukerberg', carMake: 'Acura', model: 'MDX' }
];

ReactDOM.render(
  <App data={filterData} />,
  document.getElementById('root'));

