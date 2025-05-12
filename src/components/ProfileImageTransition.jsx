import React, { useRef, useEffect, useState } from "react";
import arrowImg from "../assets/arrow.png"; // adjust path if needed

const ProfileImageTransition = ({ beforeImg, afterImg }) => {
  const imgWrapRef = useRef(null);
  const lineRef = useRef(null);

  const [progress, setProgress] = useState(0); // 0 to 100%
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        let next = prev + direction * 1;
        if (next >= 100) {
          next = 100;
          setDirection(-1);
        } else if (next <= 0) {
          next = 0;
          setDirection(1);
        }
        return next;
      });
    }, 30); // speed of animation

    return () => clearInterval(interval);
  }, [direction]);

  useEffect(() => {
    if (imgWrapRef.current && lineRef.current) {
      imgWrapRef.current.style.width = `${progress}%`;
      lineRef.current.style.left = `${progress}%`;
    }
  }, [progress]);

  return (
    <div className="relative w-56 h-56 md:w-64 md:h-64 aspect-square rounded-full overflow-hidden">
      <img
        src={beforeImg}
        alt="before"
        className="w-full h-full object-cover rounded-full"
      />

      <div
        ref={imgWrapRef}
        className="absolute top-0 left-0 h-full overflow-hidden rounded-full transition-all duration-100"
      >
        <img
          src={afterImg}
          alt="after"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <span
        ref={lineRef}
        className="absolute top-0 h-full w-[2px] flex items-center justify-center transition-all duration-100"
        style={{ transform: "translateX(-50%)" }}
      >
        <img
          src={arrowImg}
          alt="arrow"
          className="w-5 h-5"
          style={{ transform: "rotate(90deg)" }}
        />
      </span>
    </div>
  );
};

export default ProfileImageTransition;


