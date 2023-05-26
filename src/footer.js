import React from 'react';
import linkedinLogo from '../src/images/linkedinLogo.png';
import githubLogo from '../src/images/githubLogo.png';

const styles = {

  footer: {
      padding: '10px',
      textAlign: 'center',
      marginTop: '30px'
  
  },
  icon: {
      color: 'white',
      fontSize: '30px',
      padding: 5,
      position: 'relative'
  }
}

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