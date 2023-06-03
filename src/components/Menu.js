import * as React from "react";
import {Link} from "gatsby";
import * as styles from "../components/Menu.module.css"

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link className={styles.menuLink} to='/#about'>About</Link><a className={styles.menuLink} href='https://github.com/kate-grant' target="_blank">GitHub</a><Link className={styles.menuLink} to='/#work'>Work</Link><Link className={styles.menuLink} to='/#play'>Play</Link><Link className={styles.menuLink} to='/blog'>Blog</Link><Link className={styles.menuLink} to='/#contact'>Contact</Link>
    </div>
  )
}

export default Menu;
