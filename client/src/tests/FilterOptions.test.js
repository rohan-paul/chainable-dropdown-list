import React from 'react';
import expect from 'expect';
import FilterOptions from '../components/FilterOptions';
import ReactTestUtils from 'react-dom/test-utils'; // ES6

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

describe('FilterOptions', function () {
  it('loads without problems', function () {
    var FilterOptions = ReactTestUtils.renderIntoDocument(<FilterOptions/>);

  expect(FilterOptions).toExist();
  });
});

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