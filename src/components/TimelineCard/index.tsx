"use client";

import React from "react";

import stl from "./timelineCard.module.css";

interface TimelineProps {
  title: string;
  description: string;
  position: "left" | "right";
}

const TimelineCard = ({ title, description, position }: TimelineProps) => {
  const date = new Date();
  return (
    <div
      className={`${position === "right" ? stl.right : stl.left} ${
        stl.timelineCard
      }`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={stl.date}>{date.toDateString()}</div>
    </div>
  );
};

export default TimelineCard;
