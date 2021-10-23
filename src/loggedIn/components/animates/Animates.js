import React, { useRef, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import styled from "styled-components";
import styles from "./style.css";

const calcX = (y: 10, ly: 10) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x: 10, lx: 10) => (x - lx - window.innerWidth / 2) / 20;

const Container = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100px;
`;

const Column = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  padding: 2rem;
`;

const Img1 = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  img {
    width: 80px;
    position: absolute;
  }
  @media (max-width: 991px) {
    margin-top: 30px;
    margin-left: 10px;
  }
`;

const Img2 = styled.div`
  margin-top: 120px;
  margin-left: 100px;
  img {
    width: 80px;
    position: absolute;
  }
`;

const Img3 = styled.div`
  margin-top: 250px;
  margin-left: -100px;
  img {
    width: 100px;
    position: absolute;
  }
`;
const Img4 = styled.div`
  margin-top: 400px;
  margin-left: 130px;
  img {
    width: 80px;
    position: absolute;
  }
`;

const Img5 = styled.div`
  margin-top: 600px;
  margin-left: -120px;
  img {
    width: 100px;
    position: absolute;
  }
  @media (max-width: 991px) {
    margin-top: 400px;
    margin-left: -120px;
  }
`;
const Img6 = styled.div`
  margin-top: 800px;
  img {
    width: 80px;
    position: absolute;
  }
  margin-top: 30px;
  margin-left: 150px;
`;

const Animates = () => {

useEffect(() => {
  const preventDefault = (e: Event) => e.preventDefault();
  document.addEventListener("gesturestart", preventDefault);
  document.addEventListener("gesturechange", preventDefault);

  return () => {
    document.removeEventListener("gesturestart", preventDefault);
    document.removeEventListener("gesturechange", preventDefault);
  };
}, []);

const domTarget = useRef(null);
const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
  () => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    zoom: 0,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  })
);

const [wheelApi] = useSpring(() => ({ wheelY: 0 }));

useGesture(
  {
    onDrag: ({ active, offset: [x, y] }) =>
      api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
    onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
    onMove: ({ xy: [px, py], dragging }) =>
      !dragging &&
      api({
        rotateX: calcX(py, y.get()),
        rotateY: calcY(px, x.get()),
        scale: 1.1,
      }),
    onHover: ({ hovering }) =>
      !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    onWheel: ({ event, offset: [, y] }) => {
      event.preventDefault();
      wheelApi.set({ wheelY: y });
    },
  },
  { domTarget, eventOptions: { passive: false } }
);


  return (
    <div className={styles.container}>
      <animated.div
        ref={domTarget}
        className={styles.card}
        style={{
          transform: "perspective(600px)",
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}
      >
        <Container>
          <Column>
            <Img1>
              <img src="/images/js.png" alt="logo" />
            </Img1>
            <Img2>
              <img src="/images/python.svg" alt="logo" />
            </Img2>
            <Img3>
              <img src="/images/php.png" alt="logo" />
            </Img3>
            <Img4>
              <img src="/images/html.png" alt="logo" />
            </Img4>
            <Img5>
              <img src="/images/css.jpg" alt="logo" />
            </Img5>
            <Img6>
              <img src="/images/native.png" alt="logo" />
            </Img6>
          </Column>
        </Container>
      </animated.div>
      
    </div>
  );
};

export default Animates;
