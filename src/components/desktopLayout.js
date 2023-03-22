import * as React from "react";
import MorphContainer from "./MorphContainer";
import * as styles from "./DesktopLayout.module.css";

const DeskTopLayout = () => {


  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <h1 className={styles.h1}>KATE<br/>&nbsp;GRANT</h1>
        <h2 className={styles.h2}>I am a fullstack software engineer with a love of functional programming.</h2>
      </div>
      {/* Name
          Terminal
          Statement */}
      <div className={styles.vertical}></div>
      <div className={styles.morph}>
        <MorphContainer className={styles.morph}>
        </MorphContainer>
      </div>
    </main>
  )
}

export default DeskTopLayout;
