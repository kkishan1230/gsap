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
      gsap.fromTo(
        cardRef.current[index],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: cardRef.current[index],
            start: `top ${445 - 5 * index}`,
            toggleActions: "play reverse play reverse",
          },
          duration: 0.2,
        }
      );
    });

    return () => {
      gsap.killTweensOf(verticalStrip.current);
    };
  }, []);

  return (
    <div className={`${stl.timelineContainer}`} ref={container}>
      <div className={stl.verticalStrip} ref={verticalStrip}></div>
      <div className={stl.bg}></div>
      {dummyData.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => {
            cardRef.current[index] = el;
          }}
          className={`${stl.timelineItem} ${
            item.position === "left" ? stl.left : stl.right
          }`}
        >
          <TimelineCard
            title={item.title}
            description={item.description}
            position={item.position}
          />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
