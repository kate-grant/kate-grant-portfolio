import * as React from "react";
import { useState, useRef, useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import MorphContainer from "../components/MorphContainer";
import Terminal from "../components/Terminal";
import AnimatedSVGs from "./AnimatedSVGs";
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

  const svgData = [
    { url: 'static/Flwr_Lilac.svg', x: -200, y: 40, targetX: -10, targetY: 50, rotate: 940 },
    { url: 'static/React_OJ.svg', x: -150, y: 0, targetX: -5, targetY: 500, rotate: -8 },
    { url: 'static/diamond-fade.svg', x: -600, y: -20, targetX: -500, targetY: 1000, rotate: 540 },
    { url: 'static/TypeScript_Berry.svg', x: -150, y: 0, targetX: -50, targetY: 40, rotate: -30 },
    { url: 'static/diamond-fade.svg', x: 30, y: 0, targetX: -300, targetY: 60, rotate: 560 },
    // { url: 'static/Flwr_Lilac.svg', x: 200, y: 50, targetX: 400, targetY: 50, rotate: 860 },
    { url: 'static/Redux_OJ.svg', x: 70, y: 80, targetX: 65, targetY: 0, rotate: 25 },
    { url: 'static/Flwr_Lilac.svg', x: 200, y: 50, targetX: 400, targetY: 50, rotate: 860 },
    { url: 'static/OCaml_Berry.svg', x: 10, y: 150, targetX: -20, targetY: 40, rotate: 35 },
    { url: 'static/diamond-fade.svg', x: 100, y: 0, targetX: 300, targetY: 200, rotate: 270 },
    { url: 'static/diamond-fade.svg', x: 30, y: 0, targetX: -30, targetY: 10, rotate: 540 },
  ];


  return (
    <body>

    <main className={styles.main}>
        <h1 className={styles.h1}>KATE GRANT</h1>
        <Terminal />
        <section>
          <h2 ref={heroRef} className={`${styles.h2} ${styles.fadeIn} ${heroInView ? styles.visible : ""}`}>I am a Brooklyn-based fullstack software engineer with a love of functional programming.</h2>
          <div className={styles.animationContainer}>
            <AnimatedSVGs svgData={svgData} />
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
