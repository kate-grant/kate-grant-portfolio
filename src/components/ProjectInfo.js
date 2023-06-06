import * as React from "react";
import {Link} from "gatsby";
import * as styles from "../components/ProjectInfo.module.css"

const ProjectInfo = ({project}) => {
  console.log(project);
  const {title, id, imgUrl, technologies, overview, githubUrl, demoUrl} = project;
  console.log("in single project")
  return (
    <div id={id} className={styles.projectInfoContainer}>
      <div>
        <h2 id="projectSectionTitle">{title}</h2>
      </div>
      <div>
        <img src={imgUrl} id="projectImage"/>
      </div>
      <div>
        <h3>Technologies</h3>
        <ul id="technologiesList">
          {technologies.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
      <div>
        <p id="projectOverview">{overview}</p>
        <a href={githubUrl} id="projectGH" target="_blank">View on Github</a>
        <a href={demoUrl} id="projectDemo" target="_blank">View Demo</a>
      </div>
    </div>
  )
}

export default ProjectInfo;
