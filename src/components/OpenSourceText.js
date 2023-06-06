import * as React from "react";
import { useRef} from "react";
import { useInView } from 'react-intersection-observer';
import * as styles from "../components/WorkText.module.css";

const OpenSourceText = () => {

  const { ref: workRef, inView: workInView} = useInView({
    threshold: 0,
  });

  return (
    <div style={{marginBottom: '4rem'}}>
      <svg style={{maxWidth: '20vw'}} viewBox="0 0 173.34 11.2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="curve" d="M0.17,0.23c0,0,105.85,77.7,276.46,73.2s243.8-61.37,408.77-54.05c172.09,7.64,213.4,92.34,413.28,64.19"/>
<text width="20%">
        <textPath id="workPath" className={`${styles.fadeInSquiggle1} ${workInView ? styles.visible : ""}`} ref={workRef} alignmentBaseline="top" href="#curve">OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦ OPEN SOURCE CONTRIBUTIONS ✦
        <animate attributeName="startOffset" from="0%" to="-200%" dur="80s" repeatCount="indefinite"/>
        </textPath>
    </text>
</svg>
    </div>
  )
}

export default OpenSourceText;
