import React from 'react';
import expect from 'expect';
import FilterItems from '../components/FilterItems';
import toJson from 'enzyme-to-json'
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import { shallow, mount } from 'enzyme';


describe('FilterItems', () => {
  it('should exist', () => {
    expect(FilterItems).toBeTruthy();
  });
});

it('shallow render without crashing', () => {
  const wrapper = shallow(<FilterItems
      data={ [ 1, 2, 3] }      
   />);
  expect(wrapper).toMatchSnapshot();
});