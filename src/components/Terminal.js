import * as React from "react";
import { useState, useEffect, useRef, useCallback } from 'react';
import Menu from "../components/Menu";
import * as styles from "../components/Terminal.module.css";


const Terminal = () => {

  let [prevLines, setPrevLines] = useState([]);
  let [alreadyTyped, setAlreadyTyped] = useState([]);
  let [sentence, setSentence] = useState("");
  let [firstLoop, setFirstLoop] = useState(true);
  const n = useRef(0);
  const innerInterval = useRef(null);

const typer = useCallback(() => {
  let count = 0;
  return function (
    inputStr,
    idText,
    caret,
    currentDir,
    nextDir,
    time,
    printText
  ) {
    try {
      if (!inputStr || !idText || !time) {
        throw "error: Typer missing inputStr, idText, or Time";
      }
      let typeTimer = setInterval(function () {
        n.current = n.current + 1; // n counts chars in "typing" string animation for slice
        setSentence(`${idText} ${currentDir} % ` + inputStr.slice(0, n.current));
        if (n.current === inputStr.length + 2) {
          clearInterval(typeTimer); // if count is greater than string plus caret stop typing animation

          setSentence(`${idText} ${nextDir} %`); // then set prompt to include nextDir

          n.current = 0; // reset n to be ready for next typing animation
          const blinkInterval = setInterval(function () { // secondary interval for caret blink

            if (n.current === 0) { // if n has been reset, show caret and set n to 1
              setSentence(`${idText} ${nextDir} % ${caret}`);
              n.current = 1;
            } else { // if n has been set to 1, remove caret and set n to 0
              setSentence(`${idText} ${nextDir} %`);
              n.current = 0;
            }
          }, time);

          innerInterval.current = blinkInterval;

          count++; // count new line

          setAlreadyTyped([...alreadyTyped, inputStr]); // add inputStr to array of already animated strings (w/o prompt)

          setPrevLines([...prevLines, `${idText} ${currentDir} % ${inputStr}`]); // add inputStr to array of prevLines (w/ prompt)



          if (printText) { // if there is text to cat (ie. menu)

            setAlreadyTyped([...alreadyTyped, printText]); // add text to cat to array of already animated strings (w/o prompt)
            setPrevLines([...prevLines, `${idText} ${currentDir} % ${inputStr}`, "menu"]); // add text to cat to array of prevLines (w/o prompt)

            count = count + 4; // total lines + 4 -> should be 5 in total after first run, incl. menu
          }
        }
      }, 60);
    } catch (e) {
      console.log(e);
    }
  };
});
const doit = typer();

useEffect(() => { // componentDidMount run typer with these args
  doit("cd kate-grant-portfolio", "$visitor ", "_ ", "~", "kate-grant-portfolio", 500);

  return () => {
    clearInterval(innerInterval.current);
    clearInterval(typer);
  }
}, []);

let menuInterval = useRef(null);

const lsPortfolio = useCallback(() => {
  console.log('callback');
  clearInterval(innerInterval.current);
    clearInterval(typer);

    if (firstLoop) {
    doit(
      "cat links.txt",
      "$visitor ",
      "_ ",
      "kate-grant-portfolio",
      "kate-grant-portfolio",
      500,
      true
    );
    }

        clearInterval(menuInterval.current);

}, [doit, innerInterval]);



useEffect(()=>{
  console.log('smol effect');
  if(firstLoop){
    menuInterval.current = setInterval(function () {
      lsPortfolio()
    }, 3000);
  }
  setFirstLoop(false);
  return () => {
    setFirstLoop(false);
  }
}, [])

  return (
    <div className={styles.terminalOuterContainer}>
      <div  className={styles.terminalContainer}>
        <div id="rectangle"></div>
      <div id="already">{prevLines.length === 0 ? " " : prevLines.map((line, i) => ( line === "menu" ? <Menu key={`typed + ${i}`}/> :
        <div className="typed" key={`typed + ${i}`}>{line}</div>
      ))}</div>
      <p id="demo"><span id="sentence">{sentence}</span><span id="caret">&nbsp;</span></p>
      </div>
    </div>
  )
}

export default Terminal;

