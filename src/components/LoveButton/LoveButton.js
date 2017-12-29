import React from 'react';
import PropTypes from 'prop-types';


const LoveButton = ({ active, onClick }) => {
  return (
    <div>
      <p>lover: {active}</p>
      <a className="btn btn-lg btn-success"
         onClick={e => {
           e.preventDefault()
           onClick()
         }}>
        add lover
      </a>
    </div>
  )
};

LoveButton.propTypes = {
  active: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LoveButton;
