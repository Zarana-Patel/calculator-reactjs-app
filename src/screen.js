import React from 'react';
import ScreenRow from './screenrow';
import PropTypes from 'prop-types';

const Screen = (props) => {
  return (
    <div className="screen">
      <ScreenRow value={props.input}/>
      <ScreenRow value={props.result}/>
    </div>
  );
}

Screen.propTypes = {
  input : PropTypes.string.isRequired,
  result: PropTypes.string.isRequired
 }

export default Screen;
