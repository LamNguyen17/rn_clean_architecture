/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {describe, expect, test} from '@jest/globals';
import {container, TYPES} from 'di';
// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

function sum(a, b) {
  return a + b;
}

function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}

it('renders correctly', () => {
  // let ninja;
  //
  // beforeEach(() => {
  //   ninja = myContainer.get<Warrior>(TYPES.Warrior);
  // });
  renderer.create(<App />);
});

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
  test('it should filter by a search term (link)', () => {
    const input = [
      {id: 1, url: 'https://www.url1.dev'},
      {id: 2, url: 'https://www.url2.dev'},
      {id: 3, url: 'https://www.link3.dev'},
    ];

    const output = [{id: 3, url: 'https://www.link3.dev'}];
    expect(filterByTerm(input, 'link')).toEqual(output);
  });
});
