import React  from "react";
import PropTypes from 'prop-types';

const ScreenRow = (props) => {
  return (
    <div className="screen-row">
      <div>{props.value}</div>
     
    </div>
  )
}

ScreenRow.propTypes = {
  value: PropTypes.string.isRequired
}

export default ScreenRow;
