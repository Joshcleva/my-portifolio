import React, { useRef, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import styled from "styled-components";
import styles from "./style.css";

const calcX = (y: 10, ly: 10) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x: 10, lx: 10) => (x - lx - window.innerWidth / 2) / 20;

const Container = styled.div`
  display: inline-block;
  padding: 0.8rem;
  background: #c7d2fe66;
  border-radius: 10px;
  z-index: 1;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  text-align: center;
  cursor: pointer;
  position: relative;
  background-clip: border-box;
`;

const ImgWrapper = styled.div`
  img {
    width: 300px;
    height: auto;
    border: 2px solid #888;
    border-radius: 50%;
  }
  height: 100%;
  text-align: center;
  flex-direction: column;
  h1 {
    line-height: 1.2;
    letter-spacing: 1.5;
    font-family: "Gilroy";
    font-size: ;
  }

  h4 {
    line-height: 1.2;
    letter-spacing: 1.5;
    font-family: "Gilroy";
    font-size: 20px;
    margin-top: -15px;
  }
`;

function MyProfile() {
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
          <ImgWrapper>
            <img src="/images/myProfile.png" alt="pic" />
            <h1>BWAMBALE JOSHUA</h1>
            <h4>Full Stack developer</h4>
          </ImgWrapper>
        </Container>
      </animated.div>
    </div>
  );
}

export default MyProfile;
