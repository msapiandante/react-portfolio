import React from 'react';
import linkedinLogo from '../images/linkedinLogo.png';
import githubLogo from '../images/githubLogo.png';

function Footer() {
  const iconStyle = {
    width: '24px', // Set the desired width of the icon
    height: '24px', // Set the desired height of the icon
  };

  return (
    <div>
      <a href="https://github.com/msapiandante">
        <img src={githubLogo} alt="Github" style={iconStyle} />
      </a>
      
      <a href="www.linkedin.com/in/melanie-sapiandante-503704137">
        <img src={linkedinLogo} alt="LinkedIn" style={iconStyle} />
      </a>
    </div>
  );
}

export default Footer;