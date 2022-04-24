import React, { useState, useEffect } from 'react';
import '../styles/Box.css';
// const props = {
//   handleClick: () => function,
//   display: 'X'
// };

// const {display} = props;

function Box(display, handleClick) {
  const [playerMark, setPlayerMark] = useState('-');

  // const swap = () => {
  //   if (playerMark === 'X') {
  //     setPlayerMark('O');
  //   } else {
  //     setPlayerMark('X');
  //   }
  // };

  const handleClickx = () => {
    if (playerMark === 'X') {
      setPlayerMark('O');
    } else {
      setPlayerMark('X');
    }
    // let oldValue = playerMark;
    // let newValue = oldValue === 'X' ? 'O' : 'X';
    // setPlayerMark(newValue);
  };

  // useEffect(() => {
  //   const timerID = setInterval(() => swap(), 300);
  //   return () => {
  //     clearInterval(timerID);
  //   };
  // }, [playerMark]);

  return (
    <button className='Box' type='button' onClick={handleClickx}>
      {/* {display} */}
      {playerMark}
    </button>
  );
}

export default Box;
