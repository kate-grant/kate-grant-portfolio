import React, { useRef, Suspense } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Sketch, ReactP5Wrapper } from "p5-react-wrapper";

const BlogSketch = React.memo(({ setup, draw, fn }) => (
  <div>
    <Sketch setup={setup} draw={draw} mouseMoved={fn} />
  </div>
));

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, extension: { eq: "png" } }
      ) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  const pngImages = useRef([]);
  const displacement = useRef({ x: 0, y: 0 });

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.imageMode(p5.CENTER);

    pngImages.current = data.allFile.edges.map((edge) => {
      const img = p5.loadImage(edge.node.publicURL);
      img.width /= 2;
      img.height /= 2;
      return img;
    })
  }

  const draw = (p5) => {
    p5.background(255);

    pngImages.current.forEach((img1, i) => {
      p5.push();
      p5.translate(p5.width / 2, p5.height / 2);

      const { x, y } = displacement.current;
      p5.translate(x, y);

      p5.image(img1, 0, 0);

      pngImages.current.forEach((img2, j) => {
        if (i === j) return
        const overlapping = p5.collideRectRect(
          -img1.width / 2,
          -img1.height / 2,
          img1.width,
          img1.height,
          -img2.width / 2,
          -img2.height / 2,
          img2.width,
          img2.height
        );
        if (overlapping) {
          displacement.current.x += p5.random(-10, 10);
          displacement.current.y += p5.random(-10, 10);
        }
      })

      p5.pop();
    })
  }

  const mouseMoved = (p5) => {
    displacement.current.x = p5.mouseX - p5.width / 2;
    displacement.current.y = p5.mouseY - p5.height / 2;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogSketch setup={setup} draw={draw} fn={mouseMoved} />
    </Suspense>
  )
}

export default Blog;


