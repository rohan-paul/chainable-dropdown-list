import React, { Component } from 'react';

class FilterOptions extends React.Component {

  changeOption = (type, e) => {
    let val = e.target.value;
    this.props.changeOption(val, type);
  }

  render () {
    return (
      <div className="filter-options">
        <div className="filter-option">

          <label>Car Make</label>
          <select id="carMake" value={this.props.carMake} onChange={this.changeOption.bind(this, 'carMake')}>
          {this.props.carMakeOptions.map(option => {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>

          <label>Model</label>
          <select id="model" value={this.props.model} onChange={this.changeOption.bind(this, 'model')}>
          {this.props.modelOptions.map(option => {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>


        </div>
      </div>
    );
  }
};

export default FilterOptions;