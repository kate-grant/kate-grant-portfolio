import * as React from "react";
import { useState, useEffect } from "react";
import MorphContainer from "../components/MorphContainer";
import Terminal from "../components/Terminal";
import * as styles from "../components/DesktopLayout.module.css";

const DeskTopLayout = () => {

  let [windowHeight, setWindowHeight] = useState(window.scrollY);

  const scrollHandler = (e) => {
    console.log('in hanlder');
    let pageTop = windowHeight;
    let pageBottom = pageTop + window.innerHeight;
    let rect = e.currentTarget.getBoundingClientRect();
    console.log('HEEERE', pageTop, pageBottom, rect);

    if (rect.y > pageBottom) {
      if(e.currentTarget.props.className !== "visible") {
        e.currentTarget.classList.add("visible");
      }
    }
    // } else {
    //   e.target.classList.remove("visible");
    // }

  }

  useEffect(() => {
    console.log('in effect')
    return () => {
      setWindowHeight(window.screenY);
    }
  })
  console.log('hi', windowHeight);

  // useEffect(() => {
  //   console.log('in effect')
  //   const sections = document.getElementsByTagName('section');
  //   console.log('sec', sections);
  //   Array.from(sections).forEach(section => {
  //     section.addEventListener('scroll', scrollHandler);
  //   });
  //   return () => {
  //     setWindowHeight(window.screenY);
  //   }
  // })
  // console.log('hi', windowHeight);


  return (
    <body>

    <main className={styles.main}>
        <h1 className={styles.h1}>KATE GRANT</h1>
        <Terminal />
        <section className="visible" onScroll={scrollHandler}>
          <h2 className={styles.h2}>I am a Brooklyn-based fullstack software engineer with a love of functional programming.</h2>
          <div className={styles.morph}>
            <MorphContainer className={styles.morph}>
            </MorphContainer>
          </div>
        </section>
        <section className="skills" onScroll={scrollHandler}>
          <h3>Check out what I'm currently building by visiting my Github.</h3>
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
