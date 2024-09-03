import React from 'react';
import './RightTopDiv.css';
import question from '/Image/question.png'
import grid from '/Image/grid.png'
const RightTopDiv = () => {
  return (
    <div className='right'>
      <div className='question'>
      <div>
        <img src={question}></img>
      </div>
      <div>
        <img src={grid}></img>
      </div>
      </div>
    <div className="right-top-div">
      
      
      <div className='about'>
        
      <button>About Me</button>
     
        <button>Experiences</button>
        <button>Recommended</button>
        </div>
       
        <div className='desc'>
        <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
          <br/>
          <br/>

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
        </div>
    </div>
    </div>
  );
};

export default RightTopDiv;
