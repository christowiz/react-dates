import React from 'react';
import { storiesOf } from '@storybook/react';

import SingleDatePickerWrapper from '../examples/SingleDatePickerWrapper';

const TestInput = props => (
  <div style={{ marginTop: 16 }} >
    <input
      {...props}
      type="text"
      style={{
        height: 48,
        width: 284,
        fontSize: 18,
        fontWeight: 200,
        padding: '12px 16px',
      }}
    />
  </div>
);

storiesOf('SingleDatePicker (SDP)', module)
  .addWithInfo('default', () => (
    <SingleDatePickerWrapper />
  ))
  .addWithInfo('as part of a form', () => (
    <div>
      <SingleDatePickerWrapper />
      <TestInput placeholder="Input 1" />
      <TestInput placeholder="Input 2" />
      <TestInput placeholder="Input 3" />
    </div>
  ));
