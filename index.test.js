import React from 'react';
import { shallow, render } from 'enzyme';
import Welcome from './src/index';
import WelcomeDist from './dist/index';

describe('Welcome', () => {
  describe('when rendered', () => {
    it('should not throw an error', () => {
      const wrapper = shallow(<Welcome />);
      expect(wrapper.length).toBe(1);
    });

    it('should render "Welcome User!" when no props are passed', () => {
      expect(render(<Welcome />).text()).toBe('Welcome User!');
    });

    it('should render "Welcome Matt!" when "Matt" is passed as a user prop', () => {
      expect(render(<Welcome user={'Matt'} />).text()).toBe('Welcome Matt!');
    });
  });
});

describe('WelcomeDist', () => {
  describe('when rendered', () => {
    it('should not throw an error', () => {
      const wrapper = shallow(<WelcomeDist />);
      expect(wrapper.length).toBe(1);
    });

    it('should render "Welcome User!" when no props are passed', () => {
      expect(render(<WelcomeDist />).text()).toBe('Welcome User!');
    });

    it('should render "Welcome Matt!" when "Matt" is passed as a user prop', () => {
      expect(render(<WelcomeDist user={'Matt'} />).text()).toBe(
        'Welcome Matt!'
      );
    });
  });
});
