import * as React from "react";
import { useState, useEffect, useRef, useCallback } from 'react';
import Menu from "./Menu";
import * as styles from "./terminal.module.css";


const Terminal = () => {

  let [prevLines, setPrevLines] = useState([]);
  let [alreadyTyped, setAlreadyTyped] = useState([]);
  let [sentence, setSentence] = useState("");
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
      console.log('1 input', inputStr);
      let typeTimer = setInterval(function () {
        console.log('2');
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
          console.log('3', alreadyTyped, 'already before')
          setAlreadyTyped([...alreadyTyped, inputStr]); // add inputStr to array of already animated strings (w/o prompt)
          console.log(alreadyTyped, 'already after');
          console.log('3.5', inputStr, "also input", alreadyTyped);
          setPrevLines([...prevLines, `${idText} ${currentDir} % ${inputStr}`]); // add inputStr to array of prevLines (w/ prompt)
          console.log('4', prevLines);


          if (printText) { // if there is text to cat (ie. menu)
            console.log('5 in if print', printText)

            setAlreadyTyped([...alreadyTyped, printText]); // add text to cat to array of already animated strings (w/o prompt)
            setPrevLines([...prevLines, `${idText} ${currentDir} % ${inputStr}`, "menu"]); // add text to cat to array of prevLines (w/o prompt)
            console.log('6 prev', prevLines);

            count = count + 4; // total lines + 4 -> should be 5 in total after first run, incl. menu
          }
          console.log(count, "7 count");
        }
      }, 60);
    } catch (e) {
      console.log(e);
    }
  };
});
const doit = typer();

useEffect(() => { // componentDidMount run typer with these args
  doit("cd portfolio", "🍕 $visitor ", "_ ", "~", "portfolio", 500);

  return () => {
    clearInterval(innerInterval.current);
    clearInterval(typer);
  }
}, []);

const lsPortfolio = useCallback(() => {
  clearInterval(innerInterval.current);
    clearInterval(typer);
    doit(
      "cat links.txt",
      "🍕 $visitor ",
      "_ ",
      "portfolio",
      "portfolio",
      500,
      true
    );

}, [doit, innerInterval]);

  return (
    <div className={styles.terminalOuterContainer}>
      <div  className={styles.terminalContainer}>
        <div id="rectangle"></div>
      <div id="already">{prevLines.length === 0 ? " " : prevLines.map((line, i) => ( line === "menu" ? <Menu key={`typed + ${i}`}/> :
        <div className="typed" key={`typed + ${i}`}>{line}</div>
      ))}</div>
      <p id="demo"><span id="sentence">{sentence}</span><span id="caret">&nbsp;</span></p>
      <button id="myBtn" onClick={lsPortfolio}>mybutn</button>
      </div>
    </div>
  )
}

export default Terminal;

