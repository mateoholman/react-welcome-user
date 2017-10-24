import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './index';

describe('Welcome', () => {
  describe('when rendered', () => {
    it('should not throw an error', () => {
      expect(shallow(<Welcome />).length).toBe(1);
    });

    it('should render "Welcome User!" when no props are passed', () => {
      expect(
        shallow(<Welcome />)
          .children()
          .text()
      ).toBe('Welcome User!');
    });
  });
});
