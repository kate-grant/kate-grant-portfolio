import * as React from "react";
import * as styles from "../components/Menu.module.css"

const Menu = () => {
  return (
    <div className={styles.menu}>
      <a className={styles.menuLink} href=''>About</a><a className={styles.menuLink} href=''>GitHub</a><a className={styles.menuLink} href=''>Work</a><a className={styles.menuLink} href=''>Play</a><a className={styles.menuLink} href=''>Blog</a><a className={styles.menuLink} href=''>Contact</a>
    </div>
  )
}

export default Menu;
