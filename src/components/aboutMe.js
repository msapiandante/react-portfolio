import React from 'react';
import picture from '../images/mspicture.jpg'

function About() {
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

export default About;