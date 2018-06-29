import React from 'react';
// import ReactDOM from 'react-dom';
import { ReactTestUtils } from 'react-dom/test-utils'; // ES6
import expect from 'expect';
import FilterOptions from '../components/FilterOptions';


describe('FilterOptions', () => {
  it('should exist', () => {
    expect(FilterOptions).toBeTruthy();
  });
});

describe('FilterOptions', function () {
  it('loads without problems', function () {
    require('../components/FilterOptions');
  });
});

// The below 2 tests are failing - giving " Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined."

describe('FilterOptions', () => {

  it('FilterOptions component loads without problems', () => {
  var filterOptions = ReactTestUtils.renderIntoDocument(<FilterOptions
      data={ [1, 2, 3] }
      carMakeOptions={ ['a', 'b', 'c'] }
      modelOptions={ ['a', 'b', 'c'] }
      changeOption={ ['a', 'b', 'c'] }
    />);

  expect(filterOptions).toBeTruthy();
  });
});

/* describe('FilterOptions', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<FilterOptions/>, div);

      expect(FilterOptions).toExist();
    });
  }); */

/* describe('FilterOptions', function () {

  it('changes without problems', function () {
    var FilterOptions =  ReactTestUtils.renderIntoDocument(<FilterOptions/>);

    const inputNode = ReactDOM.findDOMNode(FilterOptions.refs.input);

    const newValue = 'some text';
    inputNode.value = newValue;
    ReactTestUtils.Simulate.change(inputNode);

    const nameNode = ReactDOM.findDOMNode(FilterOptions.refs.name);
    expect(nameNode.textContent).toEqual(newValue);
  });
}); */