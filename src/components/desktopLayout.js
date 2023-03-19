import * as React from "react";
import MorphContainer from "./morphContainer";
import * as styles from "./desktopLayout.module.css";

const DeskTopLayout = () => {


  return (
    <main>
      <div>
        <h1>Kate<br/>Grant</h1>
      </div>
      {/* Name
          Terminal
          Statement */}
      <div class={styles.vertical}></div>
      <MorphContainer>
        <h2>Morph Here</h2>
      </MorphContainer>
    </main>
  )
}

export default DeskTopLayout;
