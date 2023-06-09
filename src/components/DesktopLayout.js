import * as React from "react";
import { useState, useRef, useEffect} from "react";
import {Link} from "gatsby";
import { useInView } from 'react-intersection-observer';
import Terminal from "../components/Terminal";
import AnimatedSVGs from "../components/AnimatedSVGs";
import WorkText from "../components/WorkText";
import MobileText from "../components/MobileText";
import OpenSourceText from "../components/OpenSourceText";
import ContactForm from "../components/ContactForm";
import { Modal } from "@mui/material";
import * as styles from "../components/DesktopLayout.module.css";

const DeskTopLayout = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

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

  const { ref: playRef, inView: playInView} = useInView({
    threshold: 1,
    rootMargin: "40%",
  });

  const { ref: blogRef, inView: blogInView} = useInView({
    threshold: 1,
    rootMargin: "50%",
  });

  const { ref: contactOptionsRef, inView: contactOptionsInView} = useInView({
    threshold: 1,
    rootMargin: "10%",
  });

  const { ref: helloRef, inView: helloInView} = useInView({
    threshold: 1,
    rootMargin: "40%",
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
      <main className={styles.main}>
          <h1 id="about" className={styles.h1}>KATE GRANT</h1>
          <section id="animationContainer" className={styles.animationContainer}>
              <AnimatedSVGs svgData={svgData} />
          </section>
          <section className={styles.hero}>
            <h2 ref={heroRef} className={`${styles.h2} ${styles.fadeIn} ${heroInView ? styles.visible : ""}`}>I am a Brooklyn-based <span className="t">fullstack</span> software engineer with a <span className={styles.wavy}>love</span> of <span className={styles.wavy}>functional</span> programming.</h2>
            <h3 ref={githubRef} className={`${styles.h3} ${styles.subtitle} ${styles.fadeInRight} ${githubInView ? styles.visible : ""}`}>Check out what I'm currently building by visiting my <span className={`${styles.wavy} ${styles.githubLink}`}><a href="https://github.com/kate-grant">Github</a></span>.</h3>
          </section>
          <section id="work" className={`work ${styles.work}`}>
            <div className={styles.cardContainer} style={{transform: "rotate(5deg)"}}>
              <div className={styles.card}>
                <img src="./static/portfolio-media-img.png" />
                <Link to='/projects/#kate-grant-portfolio'>Portfolio</Link>
              </div>
              <div className={styles.card} style={{transform: "rotate(-1deg)"}}>
                <img src="./static/starchart3d-media-img.png" />
                <Link to='/projects/#starchart-3d'>StarChart3D</Link>
              </div>
              <div className={styles.card} style={{transform: "rotate(-3deg)"}}>
                <img src="./static/trippn-media-img.png" />
                <Link to='/projects/#trippn'>Trippn</Link>
              </div>
              <div className={styles.card} style={{transform: "rotate(6deg)"}}>
                <img src="./static/allmatcha-media-img.png" />
                <Link to='/projects/#allmatcha'>AllMatcha</Link>
              </div>
              <div className={styles.card} style={{transform: "rotate(6deg)"}}>
                <img src="./static/yellowjacket-media-img.png" />
                <Link to='/projects/#yellowjacket'>YellowJacket</Link>
              </div>
              <div className={styles.card} style={{transform: "rotate(-7deg)"}}>
                <img src="./static/musical-web-showcase-media-img.png" />
                <Link to='/projects/#musical-web-showcase'>Musical Web Showcase</Link>
              </div>
              <div className={styles.card} style={{transform: "rotate(1deg)"}}>
                <img src="./static/youareami-media-img.png" />
                <Link to='/projects/#youareami'>YouAreAmI</Link>
              </div>
              <WorkText />
              <MobileText />
              <OpenSourceText />
            </div>
            <div className={styles.opensourceContainer}>
              <div>
                <h2 className={styles.h2}>Open Source Contributions</h2>
              </div>
              <div>
                <ul>
                  <li>Three.js</li>
                  <li>P5.js</li>
                  <li>Tablecloth</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="play" className={styles.play}>
            <h3>Creative Technology</h3>
            <ul ref={playRef} className={`${styles.fadeIn} ${playInView ? styles.visible : ""}`}>
              <li><Link to='/projects/#youareami'>YouAreAmI</Link></li>
              <li><Link to='/projects/#the-musical-web-showcase'>The Musical Web Showcase</Link></li>
            </ul>
          </section>
          <section id="blog" className={`blog ${styles.blog}`}>
            <h2 ref={blogRef} className={`${styles.h2Decorated} ${styles.blogTitle} ${styles.fadeInRight} ${blogInView ? styles.visible : ""}`}>Blog</h2>
            <ul>
              <li><Link to='/new-react-documentation-2023/'>New React Documentation: An Overview of New Documentation and Design Patterns &#40;2023&#41;</Link></li>
            </ul>
            <div className={styles.moreContainer}>
              <Link className={`${styles.seeMoreBlog} ${styles.wavy}`} to='/blog'>See more →</Link>
            </div>
          </section>
          <section id="contact" className={styles.contact}>
            <div ref={contactOptionsRef} className={`${styles.contactOptions} ${styles.fadeIn} ${contactOptionsInView ? styles.visible : ""}`}><h4><a className={styles.wavy} href='https://www.linkedin.com/in/kate-grant-dev/'>LinkedIn</a></h4><h4><a className={`${styles.wavy} ${styles.email}`} onClick={handleOpen}>Email</a></h4><h4><a className={styles.wavy} href='https://github.com/kate-grant'>Github</a></h4></div>
            <Modal
            className={styles.modal}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-contact-form"
            aria-describedby="modal-email-contact">
              <>
                <ContactForm close={handleClose}/>
              </>
            </Modal>
            <div>
                <h3 ref={helloRef} className={`${styles.fadeIn} ${helloInView ? styles.visible : ""}`}>Say Hello</h3>
            </div>
            <h4>Kate Grant © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a></h4>
          </section>
          <Terminal className={styles.terminal}/>
      </main>
  )
}

export default DeskTopLayout;
