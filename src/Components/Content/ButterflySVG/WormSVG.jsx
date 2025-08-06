import React, { useState, useEffect } from "react";
import "./WormSVG.css";
import fly from "../../images/dolar.gif";

const WORM_WIDTH = 24;
const WORM_HEIGHT = 24;
const STOP_DISTANCE = 10; 

const getRandomPosition = () => ({
  x: Math.random() * (document.documentElement.clientWidth - WORM_WIDTH),
  y: Math.random() * (document.documentElement.clientHeight - WORM_HEIGHT),
});

const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

export default function Worm() {
  const [pos, setPos] = useState(getRandomPosition());
  const [mousePos, setMousePos] = useState({ x: null, y: null });
  const [viewport, setViewport] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };
    window.addEventListener("resize", updateViewport);
    window.addEventListener("scroll", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("scroll", updateViewport);
    };
  }, []);

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    const moveWorm = () => {
      setPos((prev) => {
        if (mousePos.x !== null && mousePos.y !== null) {
          const headX = prev.x + WORM_WIDTH;
          const headY = prev.y + WORM_HEIGHT / 2;
          const dx = mousePos.x - headX;
          const dy = mousePos.y - headY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > STOP_DISTANCE) {
            const step = Math.min(10, dist - STOP_DISTANCE);
            let nx = prev.x + (dx / dist) * step;
            let ny = prev.y + (dy / dist) * step;
            nx = clamp(nx, 0, viewport.width - WORM_WIDTH);
            ny = clamp(ny, 0, viewport.height - WORM_HEIGHT);
            return { x: nx, y: ny };
          } else {
            return {
              x: clamp(prev.x, 0, viewport.width - WORM_WIDTH),
              y: clamp(prev.y, 0, viewport.height - WORM_HEIGHT),
            };
          }
        } else {
          return {
            x: clamp(prev.x, 0, viewport.width - WORM_WIDTH),
            y: clamp(prev.y, 0, viewport.height - WORM_HEIGHT),
          };
        }
      });
    };
    const interval = setInterval(moveWorm, 18);
    return () => clearInterval(interval);
  }, [mousePos, viewport]);

  return (
    <div
      className="worm-screen"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    >
      <div
        className="worm"
        style={{
          left: pos.x,
          top: pos.y,
          width: WORM_WIDTH,
          height: WORM_HEIGHT,
          position: "absolute",
        }}
      >
        <img
          src={fly}
          alt="Worm GIF"
          style={{
            width: `${WORM_WIDTH}px`,
            height: `${WORM_HEIGHT}px`,
            display: "block",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
