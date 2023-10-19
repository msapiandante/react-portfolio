import React from 'react';
import picture from '../images/mspicture.jpg'

const styles = {
    body: {
      background: "white",
      height: 525,
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    header: {
      color: "black",
      fontFamily: 'Rockwell, Courier Bold, Courier'
    },
    text: {
      color: "black",
      fontFamily: 'Rockwell, Courier Bold, Courier'
    },
    profilePic: {
      borderRadius: '50%',
      width: 125,
      height: 125,
      marginLeft: 350
    }
  };

function AboutMe() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h1 style={styles.header}>About Me
                        <img src={picture} alt="professional picture of Melanie" className="img-fluid" />
                    </h1>
                </div>
                <div className="col-md-9">
                    <p style={styles.body}>
                    Former Head Chef leveraging experience in social work and restaurant service industries transitioning into the role of Full Stack Web Developer with a certificate from University of Pennsylvania. Adaptable. Dedicated. Creative problem solving and management under pressure. Exceptional communication, strong networking and organizational skills. Several collaborations with peers to build successful web apps from start to finish.
                    </p>


                </div>
            </div>
        </div>
    );
}

export default AboutMe;