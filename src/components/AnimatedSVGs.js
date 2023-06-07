import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { easeBounceOut, svg } from 'd3';

// function checkCollision(rect1, rect2) {
//   return (
//     rect1.x < rect2.x + rect2.width &&
//     rect1.x + rect1.width > rect2.x &&
//     rect1.y < rect2.y + rect2.height &&
//     rect1.y + rect1.height > rect2.y
//   );
// }

let testCount1 = 0;

const AnimatedSVGs = ({ svgData }) => {
  const containerRef = useRef(null);
  testCount1 = testCount1 + 1;

  const animate = () => {
    const container = d3.select(containerRef.current);
    const svgElements = container.selectAll(".outer");
    const windowHeight = window.innerHeight > 600 ? window.innerHeight : window.innerHeight / 5 ;


    svgElements.each(function (d) {
      console.log("thisssssssssssss", this)
      const svgElement = d3.select(this);
      console.log("sssssssss", svgElement);
      // console.log("XXXX", d.targetX);
      if(d.url) {
        console.log("DDDDD", d)
      // const svgElement = d3.select(this);
      // if(svgElement) {


      // Apply position changes and tweening animations to the SVGs
      // using d3.transition() and d3.ease functions
      // svgElement.attr("xlink:href", "www.google.com").attr("height", "18vh").attr("width", "40vw");
      svgElement
        .transition()
        .duration(5000)
        .ease(d3.easeCubicInOut)
        .ease(easeBounceOut, 200)
        .attr("transform", (d) => `translate(${d.targetX},${windowHeight / 2}) rotate(${d.rotate})`)
        .on("end", () => {
          // Update the initial position after the animation has ended
          d.x = d.targetX;
          d.y = d.targetY;
          console.log("EEEEND")
          console.log(testCount1);
          // Restart the animation
          // animate();
        });

        // Check for collisions between SVGs and other SVGs
      // svgElements.each(function () {
      //   const otherSvgElement = d3.select(this);

      //   if (svgElement.node() === otherSvgElement.node()) return;

      //   const collision = checkCollision(
      //     svgElement.node().getBoundingClientRect(),
      //     otherSvgElement.node().getBoundingClientRect()
      //   );

      //   if (collision) {
      //     // Handle collision between SVG elements
      //     // ...

      //   }
      // });

      // // Check for collisions between SVGs and the viewport bounds
      // const svgBounds = svgElement.node().getBoundingClientRect();
      // const containerBounds = containerRef.current.getBoundingClientRect();

      // const collisionTop = svgBounds.top < containerBounds.top;
      // const collisionBottom = svgBounds.bottom > containerBounds.bottom;
      // const collisionLeft = svgBounds.left < containerBounds.left;
      // const collisionRight = svgBounds.right > containerBounds.right;

      // if (collisionTop || collisionBottom || collisionLeft || collisionRight) {
      //   // Handle collision with viewport bounds
      //   // ...

      // }
    } // if close
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    console.log("in USE EFFECT hi")

    const container = d3.select(containerRef.current);

    const svgGroup = container.selectAll("svg")
      .data(svgData)
      .enter()
      .append("svg").attr("class", "outer");


    svgGroup.each(async function(d) {
      const response = await fetch(d.url);
      const svgText = await response.text();
      d3.select(this).html(svgText);
    });

    // Call the animate function after the SVG elements are added to the DOM
    animate();
  }, []);


  return <div ref={containerRef} style={{ position: 'relative' }} />;
};

export default AnimatedSVGs;
