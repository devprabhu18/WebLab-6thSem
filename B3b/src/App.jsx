import React, { useState } from 'react';
import './App.css';


const Button = ({ number, onClick }) => {
  return (
    <button onClick={onClick}>Button {number}</button>
  );
};
//function component that will be redered to DOM
const App = () => {
  const [clickCounts, setClickCounts] = useState({ btn1: 0, btn2: 0, btn3: 0 });
  const handleClick = (buttonNumber) => {
    setClickCounts(prevCounts => ({
    ...prevCounts,
    [buttonNumber]: prevCounts[buttonNumber] + 1
    }));
    alert(`Button ${buttonNumber} was clicked!`);
  };
  return (
    <div>
      <Button number="1" onClick={() => handleClick('btn1')} />
      <p>Button 1 has been clicked {clickCounts.btn1} times.</p>
      <Button number="2" onClick={() => handleClick('btn2')} />
      <p>Button 2 has been clicked {clickCounts.btn2} times.</p>
      <Button number="3" onClick={() => handleClick('btn3')} />
      <p>Button 3 has been clicked {clickCounts.btn3} times.</p>
    </div>
  );
};
export default App;
