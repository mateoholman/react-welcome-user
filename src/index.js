import React from 'react';
import PropTypes from 'prop-types';

const Welcome = props => {
  return <h1>Welcome {props.user}!</h1>;
};

Welcome.defaultProps = {
  user: 'User'
};

Welcome.propTypes = {
  user: PropTypes.string.isRequired
};

export default Welcome;
