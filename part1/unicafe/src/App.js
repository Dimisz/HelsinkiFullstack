import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Button from './components/Button';
import Statistics from './components/Statistics';

function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const goodCountHandler = () => {
    setGoodCount(goodCount + 1);
  }

  const neutralCountHandler = () => {
    setNeutralCount(neutralCount + 1);
  }

  const badCountHandler = () => {
    setBadCount(badCount + 1);
  }

  return (
   <>
    <h1>give feedback</h1>
    <Button clickHandler={goodCountHandler} text="good" />
    <Button clickHandler={neutralCountHandler} text="neutral" />
    <Button clickHandler={badCountHandler} text="bad" />
    <Statistics good={goodCount}
            neutral={neutralCount}
            bad={badCount}
    />
   </>
  );
}

export default App;
