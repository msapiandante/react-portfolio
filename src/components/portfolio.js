import React, { useState } from 'react';
import Project from '../project';

const styles = {
    body: {
        background: "#000018",
        height: 525,
        width: 800,
        marginLeft: "auto",
        marginRight: "auto",
    },
    header: {
        color: "black",
        fontFamily: "Rockwell, Courier Bold, Courier",
        textAlign: 'center'
    },
    description: {
        fontFamily: "Rockwell, Courier Bold, Courier",
        fontSize: 20,
        color: "white",
        fontStyle: 'italic',
        textAlign: 'center'
    },
    imgCard: {
        background: "rgba(0, 0, 0, 0",
        height: 300,
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",
    },
    img: {
        height: 150,
        width: 300,
        boxShadow: "10px 5px 5px white",
    },
    githubRepo: {
        fontFamily: "Rockwell, Courier Bold, Courier",
        marginTop: 10,
        color: "white",
        fontSize: 20,
    },
    title: {
        fontFamily: "Rockwell, Courier Bold, Courier",
        fontSize: 20,
        color: "white",
        textDecoration: "none",
    },
    githubLink: {
        fontFamily: "Rockwell, Courier Bold, Courier",
        fontSize: 18,
        color: 'white',
        textDecoration: 'none'
    }
};
function Portfolio() {
    const projects = [
        {
            image: require('../images/Wow-The-Lunchtime-Odyssey_picture.png'),
            title: "Wow! Owen Wilson's Lunchtime Odyssey",
            description: "Wow! Owen Wilson's Lunchtime Odyssey is a game adventure tied to some of the most interesting trivia on the internet.Get owen to his sandwich and have a blast!",
            githublink: 'https://msapiandante.github.io/Wow-The-Lunchtime-Odyssey/',
            githubRepo: 'https://github.com/msapiandante/Wow-The-Lunchtime-Odyssey',
            id: 1
        },

    ]

    return (
        <div className="container">
            <div className='row cardDiv'>
                {projects.map(function (project) {
                    return (
                        <div className='col-3'>
                            <Project image={project.image} title={project.title} description={project.description} link={project.githublink} repo={project.githubRepo} id={project.id} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
