import React, { Component } from 'react';

class FilterItems extends React.Component {
  render () {
    return (
      <div className="filter-items">
      {this.props.data.map(function(item){
        return (
          <div className="filter-item">{item.name}</div>
        );
      })}
      </div>
    );
  }
};

export default FilterItems;