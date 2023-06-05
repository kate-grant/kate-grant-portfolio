import * as React from "react"
import { Link, graphql } from "gatsby"

import Projects from "../../../src/components/Projects.js"
import Seo from "../../../src/components/Seo"


const ProjectsIndex = () => {

  return (
    <Projects />
  )
}

export default ProjectsIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All projects" />
