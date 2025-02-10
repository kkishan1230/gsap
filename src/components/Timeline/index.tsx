"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TimelineCard from "../TimelineCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import stl from "./timeline.module.css";
import { dummyData } from "./dummyData";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const container = useRef(null);
  const verticalStrip = useRef(null);

  const cardRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      verticalStrip.current,
      {
        height: 0,
      },
      {
        height: 1340,
        ease: "none",
        scrollTrigger: {
          trigger: verticalStrip.current,
          start: "top 500",
          end: "top -900",
          scrub: true,
        },
      }
    );
  });

  useEffect(() => {
    dummyData.forEach((_, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `#timelinePoint${index}`,
          start: `top ${485 - 5 * index}`,
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        `#timelinePoint${index}`,
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.2,
        }
      ).fromTo(
        cardRef.current[index],
        {
          opacity: 0,
          yPercent: 10,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.3,
        }
      );

      return () => {
        gsap.killTweensOf(verticalStrip.current);
      };
    });
  }, []);

  return (
    <div className={`${stl.timelineContainer}`} ref={container}>
      <div className={stl.verticalStrip} ref={verticalStrip}></div>
      <div className={stl.bg}></div>
      {dummyData.map((item, index) => (
        <div key={item.id} className={stl.timelineItem}>
          <div
            ref={(el) => {
              cardRef.current[index] = el;
            }}
          >
            <TimelineCard
              title={item.title}
              description={item.description}
              position={item.position}
            />
          </div>
          <div
            className={`${stl.timelinePoint} ${
              item.position === "left" ? stl.leftPoint : stl.rightPoint
            }`}
            id={`timelinePoint${index}`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
