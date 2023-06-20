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

export default function Footer() {
  //renders footer with icons that link to various sites on all pages
  return (
      <footer style={styles.footer}>
      <a style= {styles.icon} href="https://github.com/msapiandante"> <img src={githubLogo} alt="Github" style={iconStyle} /></a>
      <a style= {styles.icon} href="www.linkedin.com/in/melanie-sapiandante-503704137"><img src={linkedinLogo} alt="LinkedIn" style={iconStyle} /></a>
      </footer>
  )
}