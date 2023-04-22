import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./BlogLayout.module.css"

const BlogLayout = ({ location, title, children }) => {
  const blogPath = `${__PATH_PREFIX__}/blog/`
  const isBlogPath = location.pathname === blogPath
  let header

  if (isBlogPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/blog">Blog</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/blog">
        ← Blog Home
      </Link>
    )
  }

  return (
    <div className={`global-wrapper ${styles.blog}`} data-is-root-path={isBlogPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default BlogLayout
