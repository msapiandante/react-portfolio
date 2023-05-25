import React, { useState } from 'react';
import Project from './project';

function Portfolio() {
    const projects = [
        {
            image: require('../images/Wow-The-Lunchtime-Odyssey.png'),
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

export default Portfolio;