import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

var filterData = {

  details: [

    {
      name: 'Awesome Ford Edge',
      carMake: 'Ford',
      model: 'Edge'
    },
    {
      name: 'Beautiful Acura ILX',
      carMake: 'Acura',
      model: 'ILX'
    },
    {
      name: 'Sensational Ford Escase',
      carMake: 'Ford',
      model: 'Escape'
    },
    {
      name: 'Dazzling Acura MDX',
      image: './img/Acura-MDX.jpg',
      carMake: 'Acura',
      model: 'MDX'

    }

  ]
};

ReactDOM.render(
  <App data = {filterData}/>,
  document.getElementById('root'));