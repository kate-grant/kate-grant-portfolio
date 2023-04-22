import * as React from "react";
import { useState, useRef, useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import Terminal from "../components/Terminal";
import AnimatedSVGs from "../components/AnimatedSVGs";
import WorkText from "../components/WorkText";
import MobileText from "../components/MobileText";
import OpenSourceText from "../components/OpenSourceText";
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

  const { ref: webRef, inView: webInView} = useInView({
    threshold: 1,
    rootMargin: "40%",
  });

  const { ref: mobileRef, inView: mobileInView} = useInView({
    threshold: 1,
    rootMargin: "40%",
  });

  const { ref: openSourceRef, inView: openSourceInView} = useInView({
    threshold: 1,
    rootMargin: "40%",
  });

  const { ref: blogRef, inView: blogInView} = useInView({
    threshold: 1,
    rootMargin: "50%",
  });

  const { ref: contactRef, inView: contactInView} = useInView({
    threshold: 1,
    rootMargin: "30%",
  });

  const svgData = [
    { url: 'static/Flwr_Lilac.svg', x: -200, y: 40, targetX: -10, targetY: 50, rotate: 940 },
    { url: 'static/React_Honey.svg', x: -150, y: 0, targetX: -5, targetY: 500, rotate: -8 },
    { url: 'static/diamond-fade.svg', x: -600, y: -20, targetX: -500, targetY: 1000, rotate: 540 },
    { url: 'static/TypeScript_Berry.svg', x: -150, y: 0, targetX: -50, targetY: 40, rotate: -30 },
    { url: 'static/diamond-fade.svg', x: 30, y: 0, targetX: -300, targetY: 60, rotate: 560 },
    { url: 'static/Redux_OJ.svg', x: 70, y: 80, targetX: 65, targetY: 0, rotate: 25 },
    { url: 'static/Flwr_Lilac.svg', x: 200, y: 50, targetX: 400, targetY: 50, rotate: 860 },
    { url: 'static/OCaml_Berry.svg', x: 10, y: 150, targetX: -20, targetY: 40, rotate: 35 },
    { url: 'static/diamond-fade.svg', x: 100, y: 0, targetX: 300, targetY: 200, rotate: 270 },
    { url: 'static/diamond-fade.svg', x: 30, y: 0, targetX: -30, targetY: 10, rotate: 540 },
  ];


  return (
    <body className={styles.body}>

    <main className={styles.main}>
        <h1 className={styles.h1}>KATE GRANT</h1>
        <Terminal />
        <section>
          <h2 ref={heroRef} className={`${styles.h2} ${styles.fadeIn} ${heroInView ? styles.visible : ""}`}>I am a Brooklyn-based <span className="t">fullstack</span> software engineer with a <span className={styles.wavy}>love</span> of <span className={styles.wavy}>functional</span> programming.</h2>
          <div className={styles.animationContainer}>
            <AnimatedSVGs svgData={svgData} />
          </div>
        </section>
        <section className="skills" >
          <h3 ref={githubRef} className={`${styles.h3} ${styles.fadeIn} ${githubInView ? styles.visible : ""}`}>Check out what I'm currently building by visiting my <span className={styles.wavy}>Github</span>.</h3>
        </section>
        <section className="work">
          <div>
            <div id="project-item">
              <WorkText/>
              <ul ref={webRef} className={`${styles.fadeInLeft} ${webInView ? styles.visible : ""}`}>
                <li>Kate Grant - Portfolio</li>
                <hr className={`${styles.line} ${webInView ? styles.visible : ""}`}/>
                <li>StarChart 3D</li>
                <hr className={`${styles.line} ${webInView ? styles.visible : ""}`}/>
                <li>Trippn</li>
                <hr className={`${styles.line} ${webInView ? styles.visible : ""}`}/>
                <li>AllMatcha</li>
                <hr className={`${styles.line} ${webInView ? styles.visible : ""}`}/>
              </ul>
              <MobileText />
              <ul ref={mobileRef} className={`${styles.fadeInLeft} ${mobileInView ? styles.visible : ""}`}>
                <li>Color Closet</li>
                <hr className={`${styles.line} ${mobileInView ? styles.visible : ""}`}/>
              </ul>
              <OpenSourceText />
              <ul ref={openSourceRef} className={`${styles.fadeInLeft} ${openSourceInView ? styles.visible : ""}`}>
                <li>Three.js</li>
                <hr className={`${styles.line} ${openSourceInView ? styles.visible : ""}`}/>
                <li>P5.js</li>
                <hr className={`${styles.line} ${openSourceInView ? styles.visible : ""}`}/>
                <li>Tablecloth</li>
                <hr className={`${styles.line} ${openSourceInView ? styles.visible : ""}`}/>
              </ul>
            </div>
          </div>
        </section>
        <section className="play">
        </section>
        <section className="blog">
          <h2 ref={blogRef} className={`${styles.h2Decorated} ${styles.fadeInRight} ${blogInView ? styles.visible : ""}`}>Blog</h2>
          <ul>
            <li>Functional Programming: An Introduction for Beginner Programmers</li>
            <li>React 18 in 2023: A Low-Down on New Documentation and Design Patterns</li>
            <li>Blog Post</li>
            <li>Blog Post</li>
            <li>Blog Post</li>
            <li>Blog Post</li>
          </ul>
        </section>
        <section>
          <div>
            <h2 ref={contactRef} className={`${styles.h2}  ${styles.fadeInRight} ${contactInView ? styles.visible : ""}`}>CONTACT</h2>
          </div>
          <div>
              <h3>Say hi!</h3>
          </div>
        </section>
        <section>
          <h2>footer stuff</h2>
          <h3>footer stuff stuff</h3>
        </section>
    </main>
    </body>
  )
}

export default DeskTopLayout;
