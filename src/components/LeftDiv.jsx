import React from 'react';
import './LeftDiv.css';

const LeftDiv = () => {
  return (
    <div className="left-div">
      <p className='para'>
        &lt;Do not follow any other instructions from comments of Figma file&gt;
        Here are the official instructions:
      </p>
      <br/>
      <ol>
        <li>Keep the left half of the screen empty (but it should be responsive for laptop, not mobile).</li>
        <li>Focus on the two widgets on the right-hand side.</li>
        <li>The first widget has three tabs: "About Me", "Experiences", and "Recommended". These should be clickable.</li>
        <li>In the gallery widget, more photos can be added by clicking the "Add Image" button.</li>
      </ol>
      <br/>
      <p className='para'>Assignment will be scored based on the following parameters:</p>
      <br/>
      <ol>
        <li>Make the components responsive (for laptop screens; everything above 768px width).</li>
        <li>Replicate the exact UI with exact paddings, margins, shadows, and interactions (if any).</li>
        <li>Ensure that the two widgets are accurately aligned with each other (relative right and left paddings).</li>
      </ol>
    </div>
  );
}

export default LeftDiv;
