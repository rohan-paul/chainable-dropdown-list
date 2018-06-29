import React from 'react';
import expect from 'expect';

describe('App', () => {
  it('should properly run tests', () => {
    expect(1).toBe(1);
  });
});

describe('app', function () {
  it('loads without problems', function () {
    require('../App');
  });
});