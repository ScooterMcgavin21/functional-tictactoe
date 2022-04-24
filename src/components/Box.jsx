import React, { useState, useEffect } from 'react';
import '../styles/Box.css';
// const props = {
//   handleClick: () => function,
//   display: 'X'
// };

// const {display} = props;

function Box(display, handleClick) {
  const [playerMark, setPlayerMark] = useState('X');

  const swap = () => {
    if (playerMark === 'X') {
      setPlayerMark('O');
    } else {
      setPlayerMark('X');
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => swap(), 300);
    return () => {
      clearInterval(timerID);
    };
  }, [playerMark]);

  return (
    <button className='Box' type='button' onClick={handleClick}>
      {/* {display} */}
      {playerMark}
    </button>
  );
}

export default Box;
