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
      color: "white",
      fontFamily: 'Rockwell, Courier Bold, Courier'
    },
    text: {
      color: "white",
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
                        I am a first-generation, queer Filipinx based in Philadelphia. I am eager about venturing into industries where women and women of color are often under represented.

                        Currently, I am enrolled in University of Pennsylvania's Full-Time Full Stack Web Development Bootcamp and will graduate June 2023. My experiences in the healthcare, social work and restaurant industries have allowed me to build and refine strong interpersonal skills and adaptability that enrich my position as a web developer.
                    </p>


                </div>
            </div>
        </div>
    );
}

export default AboutMe;