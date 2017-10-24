import React from 'react';
import PropTypes from 'prop-types';

const Welcome = function(props) {
  return <h1>Welcome {props.user}!</h1>;
};

Welcome.propTypes = {
  user: PropTypes.string.isRequired
};

Welcome.defaultProps = {
  user: 'User'
};

export default Welcome;
