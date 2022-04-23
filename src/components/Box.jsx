import React, { useState } from 'react';
import '../styles/Box.css';
// const props = {
//   handleClick: () => function,
//   display: 'X'
// };

// const {display} = props;

function Box(display, handleClick) {
  const [playerMark, setPlayerMark] = useState('X');
  return (
    <button className='Box' type='button' onClick={handleClick}>
      {/* {display} */}
      {playerMark}
    </button>
  );
}

export default Box;
