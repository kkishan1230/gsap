"use client";

import React, { useEffect, useRef } from "react";

import styles from "./ContactScroll.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

import castleImg3 from "../../../public/images/castle3.jpg";
import castleImg1 from "../../../public/images/castle1.jpg";
import castleImg2 from "../../../public/images/castle2.jpg";
import castleImg4 from "../../../public/images/castle4.jpg";

gsap.registerPlugin(ScrollTrigger);

const ContactScroll = () => {
  const headingRef = useRef(null);
  const bannerRef = useRef(null);
  const castleNamesRef = useRef([]);
  const castleLeftImagesRef = useRef([]);

  useEffect(() => {
    // Banner Animation
    const bannerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    bannerTimeline.from(headingRef.current, {
      y: "-250%",
      duration: 1,
      scale: 1.5,
    });

    // Castle animation
    castleNamesRef.current = Array.from(
      document.querySelectorAll(`.${styles.castleNames} h2`)
    );

    castleNamesRef.current.forEach((element) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "-100% top",
          scrub: 0.5,
        },
      });

      tl.to(element, {
        y: "100%",
      });
    });

    // Castles image animation

    const castleLeftImagesRefs = Array.from(
      document.querySelectorAll(`.${styles.imageAndTextWrapper} img`)
    );

    const castleNames = Array.from(
      document.querySelectorAll(`.${styles.imageAndTextWrapper} h3`)
    );

    castleLeftImagesRefs.forEach((element, index) => {
      let isLeft = index % 2 === 0;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          scrub: 0.5,
          end: "top top",
        },
      });

      gsap.set(element, {
        filter: "brightness(30%)",
      });

      tl.to(element, {
        x: isLeft ? -100 : 100,
        duration: 1.5,
        filter: "brightness(100%)",
      }).to(
        element,
        {
          rotate: isLeft ? -(5 * (index + 1)) / 3 : (5 * (index + 1)) / 3,
          y: 20,
        },
        0.1
      );
    });

    castleNames.forEach((element) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.set(element, { scale: 0.3, opacity: 0.3, zIndex: -1 });

      tl.to(element, {
        scale: 1,
        scrub: 0.5,
        duration: 1,
        opacity: 1,
        zIndex: 2,
      });
    });
  }, []);
  return (
    <div className={styles.container}>
      <div
        className={`${styles.bannerSection} ${styles.bgCommonStyles}`}
        ref={bannerRef}
      ></div>
      <div className={`${styles.scrollable} ${styles.bgCommonStyles}`}>
        <h1 ref={headingRef}>SOME BEST CASTLES</h1>
        <div className={styles.castleNames}>
          <div className={styles.headingWrapper}>
            <h2>Windsor Castle</h2>
          </div>
          <div className={styles.headingWrapper}>
            <h2>Edinburgh Castle</h2>
          </div>
          <div className={styles.headingWrapper}>
            <h2>Neuschwanstein Castle</h2>
          </div>
          <div className={styles.headingWrapper}>
            <h2>Prague Castle</h2>
          </div>
        </div>
      </div>
      <div
        className={`${styles.castleImagesContainer} ${styles.bgCommonStyles}`}
      >
        <Image alt="" src={castleImg3} fill objectFit="cover" />
        <div className={styles.imageAndTextWrapper}>
          <Image
            src={castleImg1}
            alt=""
            width={420}
            height={500}
            objectFit="cover"
          />
          <h3>Windsor Castle</h3>
          <Image
            src={castleImg1}
            alt=""
            width={420}
            height={500}
            objectFit="cover"
          />
        </div>
        <div className={styles.imageAndTextWrapper}>
          <Image
            src={castleImg2}
            alt=""
            width={420}
            height={500}
            objectFit="cover"
          />
          <h3>Neuschwanstein Castle</h3>
          <Image
            src={castleImg2}
            alt=""
            width={420}
            height={500}
            objectFit="cover"
          />
        </div>
        <div className={styles.imageAndTextWrapper}>
          <Image
            src={castleImg3}
            alt=""
            width={420}
            height={500}
            objectFit="cover"
          />
          <h3>Edinburgh Castle</h3>
          <Image
            src={castleImg3}
            alt=""
            width={420}
            height={500}
            objectFit="cover"
          />
        </div>
      </div>

      <div style={{ height: "100vh", background: "grey" }}>
        <h2>Extra section for scroll.</h2>
      </div>
    </div>
  );
};

export default ContactScroll;
