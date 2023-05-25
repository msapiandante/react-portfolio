import React, { useState } from 'react';
import resume from '../images/Resume.pdf';
function Resume() {

  return (
    <div>
    
      <h3>Technical Skills</h3>
      
      <h3> Skills </h3>

      <a href={resume} download > Download Resume Here</a>
    </div>
    
  )
};
export default Resume;