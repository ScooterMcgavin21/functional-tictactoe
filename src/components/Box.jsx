import React from 'react';
import '../styles/Box.css';
// const props = {
//   handleClick: () => function,
//   display: 'X'
// };

// const {display} = props;

function Box(display, handleClick) {
  return (
    <button type='button' onClick={handleClick}>
      {display}
    </button>
  );
}

export default Box;
