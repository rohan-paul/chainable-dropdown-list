import React, { Component } from 'react';
import './App.css';
// import Navbar from './components/layout/Navbar'

import FilterOptions from './components/FilterOptions';
import FilterItems from './components/FilterItems';

class App extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        data: this.props.data.details,
        carMake: '',
        model: '',
        multiple: true
      }
    }

  checked = (e) => {
    this.setState({multiple: e.target.value});
  }

  filterItems = (val, type) => {
     switch (type) {
      case 'carMake':
        this.setState({carMake: val});
        break;
      case 'model':
        this.setState({model: val});
        break;
      default:
        break;
    }
  }

  render () {

    let filteredItems = this.props.data.details;
    let state = this.state;
    let filterProperties = ["carMake", "model"];

    filterProperties.forEach(filterBy => {
      let filterValue = state[filterBy];

      if (filterValue) {
        filteredItems = filteredItems.filter(item =>item[filterBy] === filterValue);
      }
    });

    let carMakeArray = this.props.data.details.map(item => item.carMake );
    let modelArray = this.props.data.details.map(item => item.model );

    carMakeArray.unshift("");
    modelArray.unshift("");


    return (
      <div className="container">
        <FilterOptions

            data={this.state.data}
            carMakeOptions={carMakeArray}
            modelOptions={modelArray}
            changeOption={this.filterItems} />

        <div className="filter-form">
          <FilterItems data={filteredItems} toggle={true} />
        </div>
      </div>
    )
  }
};

export default App;