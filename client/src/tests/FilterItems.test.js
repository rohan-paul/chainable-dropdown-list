import React from 'react';
import expect from 'expect';
import FilterItems from '../components/FilterItems';
import ReactTestUtils from 'react-dom/test-utils'; // ES6


describe('FilterItems', () => {
  it('should exist', () => {
    expect(FilterItems).toBeTruthy();
  });
});

/* describe('FilterItems', function () {
  it('loads without problems', function () {
    require('../components/FilterItems');
  });
}); */

// The below 2 tests are failing - giving " Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined."

describe('FilterItems', function () {
  it('loads without problems', function () {
    var filterItems = ReactTestUtils.renderIntoDocument(<FilterItems
      data={ [1, 2, 3] }
      />);

  expect(filterItems).toBeTruthy();
  });
});

/* describe('FilterItems', function () {

  it('changes without problems', function () {
    var FilterItems =  ReactTestUtils.renderIntoDocument(<FilterItems/>);

    const inputNode = ReactDOM.findDOMNode(FilterItems.refs.input);

    const newValue = 'some text';
    inputNode.value = newValue;
    ReactTestUtils.Simulate.change(inputNode);

    const nameNode = ReactDOM.findDOMNode(FilterItems.refs.name);
    expect(nameNode.textContent).toEqual(newValue);
  });
}); */