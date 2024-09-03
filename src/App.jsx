import React from 'react';
import LeftDiv from './components/LeftDiv';
import RightTopDiv from './components/RightTopDiv';
import RightBottomDiv from './components/RightBottomDiv';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-section">
        <LeftDiv />
      </div>
      <div className="right-section">
        <div className='top'>
        <RightTopDiv />
        
        </div>
        <hr className='hr'></hr>
        <div className='low'>
        <RightBottomDiv />
        </div>
        <hr className='hr'></hr>
      </div>
    </div>
  );
}

export default App;
