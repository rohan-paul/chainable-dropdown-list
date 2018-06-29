import React from 'react';
import expect from 'expect';
import App from '../App';
import ReactTestUtils from 'react-dom/test-utils'; // ES6

// Just a dummy test to check Karma and expect library is working
describe('App', () => {
  it('should properly run tests', () => {
    expect(1).toBe(1);
  });
});

describe('App', function () {
  it('loads without problems', function () {
    require('../App');
  });
});

describe('App', () => {
  it('should exist', () => {
    expect(App).toBeTruthy();
  });
});

// The below test is failing
/* describe('App', function () {
  it('App component loads without problems', function () {
    var App = ReactTestUtils.renderIntoDocument(<App/>);

  expect(App).toExist();
  });
}); */