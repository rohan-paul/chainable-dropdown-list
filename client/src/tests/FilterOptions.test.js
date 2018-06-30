import React from 'react';
// import ReactDOM from 'react-dom';
import { ReactTestUtils } from 'react-dom/test-utils'; // ES6
import expect from 'expect';
import toJson from 'enzyme-to-json';
import FilterOptions from '../components/FilterOptions';
import { shallow, mount } from 'enzyme';


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

it('shallow render without crashing', () => {
  const wrapper = shallow(<FilterOptions
      data={ [ 1, 2, 3] }
      carMakeOptions={ [ 1, 2, 3] }
      modelOptions={ [ 1, 2, 3] }
      changeOption={ [ 1, 2, 3] }
   />);
  expect(wrapper).toMatchSnapshot();
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