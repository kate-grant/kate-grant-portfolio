import * as React from "react";
import {Link} from "gatsby";
import ProjectInfo from "../components/ProjectInfo.js";
import * as styles from "../components/Project.module.css"

const Projects = () => {
  const projectData = [
    {
      title: "Kate Grant - Portfolio",
      id: "kate-grant-portfolio",
      imgUrl: "../static/portfolio-media-img.png",
      technologies: ["Gatsby", "React", "GraphQL", "Node.js", "D3.js", "JavaScript", ],
      overview: "A portfolio of my work in software engineering that incorporates professional and creative projects. This site is built with Gatsby and GraphQL and includes a blog.",
      githubUrl: "https://github.com/kate-grant/kate-grant-portfolio",
      demoUrl: "https://kate-grant.com"
    },
    {
      title: "YouAreAmI",
      id: "youareami",
      imgUrl: "../static/youareami-media-img.png",
      technologies: ["Google Firebase", "Hugging Face ML", "JavaScript"],
      overview: "A multiplayer synthesizer for the web, controlled by position and sentiment ML. YouAreAmI is a JavaScript-based MIDI synthesizer that uses non-musical user input to control Web Audio. Synthesizer parameters respond to real-time user positionality and text analyzed with machine learning for sentiment.",
      githubUrl: "https://github.com/kate-grant/StarChart-3D",
      demoUrl: "https://youareami.onrender.com"
    },
    {
      title: "The Musical Web Showcase",
      id: "the-musical-web-showcase",
      imgUrl: "../static/musical-web-showcase-media-img.png",
      technologies: ["Google Firebase", "Hugging Face ML", "JavaScript"],
      overview: "This website was built to showcase creative works made by students during the SFPC The Musical Web course, a 3-month exploration of Web Audio. This course used Glitch as the main collaborative and educational coding environment, and in the spirit of this, this website was made on Glitch. I participated in this course as a student. ",
      githubUrl: "https://github.com/kate-grant/musical-web-showcase",
      demoUrl: "https://thrilling-deluxe-limburger.glitch.me/"
    },
    {
      title: "StarChart3D",
      id: "starchart-3d",
      imgUrl: "../static/starchart3d-media-img.png",
      technologies: ["React", "Express.js", "Node.js", "Three.js", "React Three Fiber", "JavaScript", "PostgresSQL"],
      overview: "A 3D interactive night sky map for practicing astronomical orientation with star location and magnitude. The current version of StarChart 3d allows for highlighting constellations to practice 3D relative location--regardless of which stars are currently in your local sky--it also provides the option to colorize stars by heat index. StarChart3D is built with React Three Fiber.",
      githubUrl: "https://github.com/kate-grant/StarChart-3D",
      demoUrl: "https://www.youtube.com/watch?v=QZwwhwK7vsQ"
    },
    {
      title: "Trippn",
      id: "trippn",
      imgUrl: "../static/trippn-media-img.png",
      technologies: ["React", "Redux", "Express.js", "Node.js", "JavaScript", "PostgresSQL"],
      overview: "A travel planning web application for groups and individuals that provides a centralized place for collaboration and trip information. My focus in this project was the trip dashboard, demo, and graphic design. (Capstone project)",
      githubUrl: "https://github.com/team-joan-clarke/trip-app",
      demoUrl: "https://trippn.onrender.com"
    },
    {
      title: "AllMatcha",
      id: "allmatcha",
      imgUrl: "../static/allmatcha-media-img.png",
      technologies: ["React", "Redux", "Express.js", "Node.js", "JavaScript", "PostgresSQL"],
      overview: "A retail website for tea enthusiasts. Users can shop as guests or create an account to save purchase history. My focus in this project was the shopping cart component, design, and wireframing with Figma. This included converting guest carts to user carts, adding items to carts, storing carts for later site visits, currency arithmetic for JavaScript floating points, and checkout. (Midterm project)",
      githubUrl: "https://github.com/Matcha-with-Honey/Matcha-Shopper",
      demoUrl: "https://trippn.onrender.com"
    },
    {
      title: "YellowJacket",
      id: "yellowjacket",
      imgUrl: "../static/yellowjacket-media-img.png",
      technologies: ["React Native", "Node.js", "JavaScript", "SQLite"],
      overview: "🚧 Currently in development 🚧 A wardrobe management app. YellowJacket is a mobile app for creating collections of clothing items and outfits. (Solo hackathon project)",
      githubUrl: "https://github.com/Matcha-with-Honey/YellowJacket",
      demoUrl: ""
    }
  ];

  return (
    <div className={styles.allProjectContainer}>
      {projectData.map((singleProject) => {
        return <ProjectInfo project={singleProject} id={singleProject.id} key={singleProject.id}/>
      })}
    </div>

  )
}

export default Projects;
