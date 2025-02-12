"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Observer from "gsap/Observer";
import Image, { StaticImageData } from "next/image";

import style from "./sectionScroll.module.css";

import img1 from "../../../public/images/castle1.jpg";
import img2 from "../../../public/images/castle2.jpg";
import img3 from "../../../public/images/castle3.jpg";
import img4 from "../../../public/images/castle4.jpg";
import { splitText } from "@/utils/utils";

gsap.registerPlugin(Observer);

interface SectionData {
  id: number;
  title: string;
  zIndex: number;
  imgSrc: StaticImageData;
}

const page = () => {
  const sectionData: SectionData[] = [
    {
      id: 1,
      title: "Eldoria Keep",
      zIndex: -1,
      imgSrc: img1,
    },
    {
      id: 2,
      title: "Aethelred Fortress",
      zIndex: -1,
      imgSrc: img2,
    },
    {
      id: 3,
      title: "Veridian Citadel",
      zIndex: -1,
      imgSrc: img3,
    },
    {
      id: 4,
      title: "Shadowfen Bastion",
      zIndex: -1,
      imgSrc: img4,
    },
  ];

  const sectionsRef = useRef([]);
  const headingsRef = useRef([]);
  const mainContainerRef = useRef(null);

  useEffect(() => {
    sectionsRef.current = Array.from(
      document.querySelectorAll(`.${style.section}`)
    );

    headingsRef.current = Array.from(
      document.querySelectorAll(`.${style.section} h2`)
    );

    let currentSection = 0;
    let isAnimating = false;

    gsap.set(sectionsRef.current[currentSection], { zIndex: 1 });

    const scrollUp = () => {
      if (!isAnimating && currentSection < 3) {
        isAnimating = true;
        currentSection = currentSection + 1;
        gsap.set(sectionsRef.current[currentSection - 1], { zIndex: 0 });

        const dab = headingsRef.current[currentSection] as HTMLHeadingElement;
        const abc = splitText(dab);

        let tl2 = gsap.timeline({});
        let tl = gsap.timeline({});

        tl.fromTo(
          sectionsRef.current[currentSection],
          {
            yPercent: 100,
            zIndex: -1,
          },
          {
            zIndex: 1,
            yPercent: 0,
            duration: 1.5,
            onComplete: () => {
              isAnimating = false;
            },
          }
        ).fromTo(
          abc,
          {
            autoAlpha: 0,
            yPercent: 75,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.7,
            ease: "power2",
            stagger: {
              each: 0.02,
              from: "random",
            },
          },
          0.5
        );

        tl2.to(sectionsRef.current[currentSection - 1], {
          yPercent: -10,
          duration: 1.5,
        });
      }
    };

    const scrollDown = () => {
      if (!isAnimating && currentSection > 0) {
        isAnimating = true;
        let tl = gsap.timeline({});
        let tl2 = gsap.timeline({});

        const dab = headingsRef.current[
          currentSection - 1
        ] as HTMLHeadingElement;
        const abc = splitText(dab);
        console.log(abc);

        tl.fromTo(
          sectionsRef.current[currentSection],
          {
            yPercent: 0,
          },
          {
            yPercent: 100,
            duration: 1.5,
            onComplete: () => {
              isAnimating = false;
              gsap.set(sectionsRef.current[currentSection], { zIndex: 0 });
              gsap.set(sectionsRef.current[currentSection - 1], {
                zIndex: 1,
              });

              currentSection = currentSection - 1;
            },
          }
        ).fromTo(
          abc,
          {
            autoAlpha: 0,
            yPercent: -75,
            duration: 0.7,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            ease: "power2",
            stagger: {
              each: 0.02,
              from: "random",
            },
          },
          0.5
        );

        tl2.fromTo(
          sectionsRef.current[currentSection - 1],
          {
            yPercent: -10,
          },
          {
            yPercent: 0,
            duration: 1.5,
          }
        );
      }
    };

    Observer.create({
      target: mainContainerRef.current,
      type: "wheel",
      wheelSpeed: -1,
      tolerance: 10,
      preventDefault: true,
      onUp: () => {
        scrollUp();
      },
      onDown: () => {
        scrollDown();
      },
    });
  }, []);

  return (
    <div
      className={style.sectionScrollContainer}
      ref={mainContainerRef}
      style={{ background: "black" }}
    >
      {sectionData.map((item) => (
        <div
          key={item.id}
          className={`${style.section}`}
          id={`#section${item.id}`}
          style={{ zIndex: item.zIndex }}
        >
          <div className={style.contentWrapper}>
            <Image src={item.imgSrc} alt="" fill />
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
