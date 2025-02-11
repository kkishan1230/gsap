"use client";

import React, { useRef, useEffect } from "react";
import stl from "./snap.module.css";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Observer from "gsap/Observer";

gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollToPlugin);

const Snap = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Populate sectionsRef with the actual DOM elements
    sectionsRef.current = Array.from(
      document.querySelectorAll(`.${stl.section}`)
    );

    const body = document.getElementsByTagName("body")[0]; // No need for getElementsByTagName in modern React

    let isAnimating = false;
    let currentSection = 0;

    Observer.create({
      target: window,
      type: "scroll,touch",
      preventDefault: true,
      wheelSpeed: -1,
      tolerance: 10,
      onUp: () => {
        if (!isAnimating) {
          isAnimating = true;
          currentSection = Math.max(0, currentSection - 1); // Stay within bounds
          gsap.to(window, {
            scrollTo: sectionsRef.current[currentSection],
            duration: 1,
            onComplete: () => {
              isAnimating = false;
            },
          });
        }
      },
      onDown: () => {
        if (!isAnimating) {
          isAnimating = true;
          currentSection = Math.min(
            sectionsRef.current.length - 1,
            currentSection + 1
          ); // Stay within bounds

          gsap.to(window, {
            scrollTo: sectionsRef.current[currentSection],
            duration: 1,
            onStart: () => {
              body.style.overflow = "hidden";
            },
            onComplete: () => {
              body.style.overflow = "";
              isAnimating = false;
            },
          });
        }
      },
    });
  }, []);

  const scrollToSection = (index: number) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: sectionsRef.current[index - 1],
    });
  };

  return (
    <>
      <nav className={stl.navbar}>
        {/* Dynamically generate buttons */}
        {sectionsRef.current.map((_, index) => (
          <button key={index} onClick={() => scrollToSection(index + 1)}>
            {index + 1}
          </button>
        ))}
      </nav>
      <div className={stl.snapContainer} dir="ltr">
        {/* Use map to render sections dynamically  */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`${stl.section} ${stl[`section${i}`]}`}
            id={`section${i}`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Snap;
