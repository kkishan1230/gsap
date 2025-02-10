"use client";

import React from "react";

import stl from "./snap.module.css";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Snap = () => {
  const scrollToSection = (id: number) => {
    gsap.to(window, { duration: 1.5, scrollTo: `#section${id}` });
  };

  return (
    <>
      <nav className={stl.navbar}>
        <button onClick={() => scrollToSection(1)}>1</button>
        <button onClick={() => scrollToSection(2)}>2</button>
        <button onClick={() => scrollToSection(3)}>3</button>
        <button onClick={() => scrollToSection(4)}>4</button>
      </nav>
      <div className={stl.snapContainer} dir="ltr">
        <div className={`${stl.section} ${stl.section1}`} id="section1"></div>
        <div className={`${stl.section} ${stl.section2}`} id="section2"></div>
        <div className={`${stl.section} ${stl.section3}`} id="section3"></div>
        <div className={`${stl.section} ${stl.section4}`} id="section4"></div>
      </div>
    </>
  );
};

export default Snap;
