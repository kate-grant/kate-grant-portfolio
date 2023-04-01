import * as React from "react";
import { useState, useRef, useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import MorphContainer from "../components/MorphContainer";
import Terminal from "../components/Terminal";
import * as styles from "../components/DesktopLayout.module.css";

const DeskTopLayout = () => {

  const { ref: heroRef, inView: heroInView} = useInView({
    threshold: 1,
    rootMargin: "40%",
  });
  const { ref: githubRef, inView: githubInView} = useInView({
    threshold: 1,
    rootMargin: "30%",
  });

  return (
    <body>

    <main className={styles.main}>
        <h1 className={styles.h1}>KATE GRANT</h1>
        <Terminal />
        <section>
          <h2 ref={heroRef} className={`${styles.h2} ${styles.fadeIn} ${heroInView ? styles.visible : ""}`}>I am a Brooklyn-based fullstack software engineer with a love of functional programming.</h2>
          <div className={styles.morph}>
            <MorphContainer className={styles.morph}>
            </MorphContainer>
          </div>
        </section>
        <section className="skills" >
          <h3 ref={githubRef} className={`${styles.fadeIn} ${githubInView ? styles.visible : ""}`}>Check out what I'm currently building by visiting my Github.</h3>
        </section>
        <section className="work">
          <div>
            {/* <h3>For the Web</h3> */}
            <div id="project-type-container-left">

            </div>
            <div id="project-item-container-right">
              <ul>
                <li>Kate Grant - Portfolio</li>
                <li>StarChart 3D</li>
                <li>Trippn</li>
                <li>AllMatcha</li>
              </ul>
              {/* <h3>For Mobile</h3> */}
              <ul>
                <li>Color Closet</li>
              </ul>
              {/* <h3>Open Source Contributions</h3> */}
              <ul>
                <li>Three.js</li>
                <li>P5.js</li>
                <li>Tablecloth</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="play">
        </section>
        <section className="blog">
        </section>
    </main>
    </body>
  )
}

export default DeskTopLayout;
