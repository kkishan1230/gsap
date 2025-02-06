import Timeline from "@/components/Timeline";
import React from "react";

const Page = () => {
  return (
    <>
      <h2>This is timeline</h2>
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "#808080",
          color: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "64px",
        }}
      >
        Scroll for Timeline
      </div>
      <Timeline />
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "#808080",
          color: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "64px",
        }}
      >
        End for Timeline
      </div>
    </>
  );
};

export default Page;
