import * as React from "react";
import MorphContainer from "./MorphContainer";
import Terminal from "./Terminal";
import * as styles from "./DesktopLayout.module.css";

const DeskTopLayout = () => {


  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <h1 className={styles.h1}>KATE<br/>&nbsp;GRANT</h1>
        <Terminal />
        <h2 className={styles.h2}>I am a fullstack software engineer with a love of functional programming.</h2>
      </div>
      <div className={styles.vertical}></div>
      <div className={styles.morph}>
        <MorphContainer className={styles.morph}>
        </MorphContainer>
        <h3 className={styles.h3}>BLOG</h3>
      </div>
    </main>
  )
}

export default DeskTopLayout;
