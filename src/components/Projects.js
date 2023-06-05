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
      technologies: ["Gatsby", "React", "JavaScript", "GraphQL", "Node.js", "D3.js"],
      overview: "A portfolio of my work in software engineering that incorporates professional and creative projects. This site is built with Gatsby and GraphQL and includes a blog.",
      githubUrl: "https://github.com/kate-grant/kate-grant-portfolio",
      demoUrl: "https://kate-grant.com"
    },
    {
      title: "StarChart3D",
      id: "starchart-3d",
      imgUrl: "../static/starchart3d-media-img.png",
      technologies: ["React", "Express.js", "JavaScript", "Node.js", "Three.js", "React Three Fiber"],
      overview: "A 3D interactive night sky map for practicing astronomical orientation with star location and magnitude. The current version of StarChart 3d allows for highlighting constellations to practice 3D relative location--regardless of which stars are currently in your local sky--it also provides the option to colorize stars by heat index. StarChart3D is built with React Three Fiber.",
      githubUrl: "https://github.com/kate-grant/StarChart-3D",
      demoUrl: "https://www.youtube.com/watch?v=QZwwhwK7vsQ"
    },
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
