import React from 'react';
import lunchtimeOdysseyImage from '../images/Wow-The-Lunchtime-Odyssey_picture.png';
import nexusImage from '../images/nexus-app.png';
import soundSwapImage from '../images/sound-swap.png';

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
    background: "rgba(0, 0, 0, 0)",
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

export default function Portfolio() {
  const projects = [
    {
      image: lunchtimeOdysseyImage,
      title: "Wow! Owen Wilson's Lunchtime Odyssey",
      description: "Wow! Owen Wilson's Lunchtime Odyssey is a game adventure tied to some of the most interesting trivia on the internet. Get Owen to his sandwich and have a blast!",
      githublink: 'https://msapiandante.github.io/Wow-The-Lunchtime-Odyssey/',
      githubRepo: 'https://github.com/msapiandante/Wow-The-Lunchtime-Odyssey',
      id: 1
    },
    {
      image: nexusImage,
      title: "Nexus",
      description: "Nexus is a college life social network blog that gives students a platform to discuss their school experiences and connect with other students based on shared interests, universities, or majors. Nexus is a Full-Stack application that allows users to sign up and create an account, where they can input profile information, pictures, and write their own posts. Nexus also gives users the ability to view other students' posts, allowing them to interact with one another. Nexus users can create new posts via their profile. There is a create post button which renders a text box on screen, allowing students to write and submit their own posts. Once posts are created, students can see their posts on their profile, and will notice that their post renders on the homepage as well with other users.",
      githublink: 'https://agile-beach-11954.herokuapp.com/',
      githubRepo: 'https://github.com/msapiandante/nexus-app',
      id: 2
    },
    {
      image: soundSwapImage,
      title: "Sound Swap",
      description: "An online marketplace to buy and sell records, albums, and CDs. Users can upload records they own and sell to other users, as well as buy records that have been uploaded to the marketplace. Over the past 10 years, the resurgence of vinyls has led individuals to search out records from their favorite artists, both past and present. Formulating a marketplace that caters to individuals who want to buy and sell records not only garners a sense of community but also creates a singularized place users can visit where vinyls can be exchanged.",
      githublink: 'https://guarded-shelf-89712.herokuapp.com/',
      githubRepo: 'https://github.com/msapiandante/sound-swap',
      id: 3
    },
  ];

  return (
    <div>
      <h1 style={styles.header}>Portfolio</h1>
      <div className="row">
        {projects.map((project) => (
          <div
            className="post-card col-md-4"
            key={project.id}
            style={styles.imgCard}
          >
            <div className="card-body">
              <h2>
                <a href={project.githubRepo} style={styles.title}>
                  {project.title}{" "}
                  <img
                    src={project.image}
                    style={styles.img}
                    alt="project main page or placeholder"
                  />
                </a>
              </h2>
              <a href={project.githubRepo} style={styles.githubRepo}>
                View Repo
              </a>
              <a href={project.githublink} style={styles.githubLink}>
                View Deployed Application
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
