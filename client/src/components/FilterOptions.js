import React, { Component } from 'react';

class FilterOptions extends React.Component {

  changeOption = (type, e) => {
    let val = e.target.value;
    this.props.changeOptionProp(val, type);
  }

  render () {
    return (
      <div className="filter-options">
        <div className="filter-option">

          <label>Car Make</label>
          <select id="carMake" placeholder="Search by tags" value={this.props.carMake} onChange={this.changeOption.bind(this, 'carMake')}>

          {this.props.carMakeOptions.map(option => (<option key={option} value={option}>{option}</option> ))}
          </select>

          <label>Model</label>
          <select id="model" value={this.props.model} onChange={this.changeOption.bind(this, 'model')}>

          {this.props.modelOptions.map(option => (<option key={option} value={option}>{option}</option> ))}
          </select>

        </div>
      </div>
    );
  }
};

export default FilterOptions;