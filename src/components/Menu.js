import * as React from "react";
import * as styles from "../components/Menu.module.css"

const Menu = () => {
  return (
    <div className={styles.menu}>
      <a href=''>About</a><a href=''>GitHub</a><a href=''>Work</a><a href=''>Play</a><a href=''>Blog</a><a href=''>Contact</a>
    </div>
  )
}

export default Menu;
