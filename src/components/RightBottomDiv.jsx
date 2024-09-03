import React from 'react';
import './RightBottomDiv.css';
import './RightTopDiv.css'
import question from '/Image/question.png'
import grid from '/Image/grid.png'
import left from '/Image/left1.png'
import right from '/Image/right.png'
import img from '/Image/img1.png'
const RightBottomDiv = () => {
  return (
    <div className='right'>
      <div className='question'>
      <div>
       <button><img src={question}></img></button> 
      </div>
      <div>
       <button> <img src={grid}></img></button>
      </div>
      </div>
    <div className="right-top-div">
      
      
      
      
      <div className='jai'>
        <div className='gal'>
      <button className='gallery'>Gallery</button>
   
     
        <button className='gallery1'>+Add Image</button>
        </div>
        <div className='arrow'>
        <button ><img src={left}></img></button>
        <button><img src={right}></img></button>
        </div>
        </div>
        <div className='grid-img'>
          <img src={img}></img>
          <img src={img}></img>
          <img src={img}></img>
        
        </div>
    </div>
    </div>
  );
};

export default RightBottomDiv;
