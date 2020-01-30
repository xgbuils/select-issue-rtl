import React from 'react';
import { render } from '@testing-library/react';
import { getByDisplayValue } from '@testing-library/dom';

describe('test', () => {
  test('test', () => {
    const { getByDisplayValue } = render(
      <select value="2" onChange={() => {}}>
        <option value="1">one</option>
        <option value="2">two</option>
      </select>
    );

    getByDisplayValue("2");
  });
});
