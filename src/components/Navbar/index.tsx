"use client";

import React from "react";
import Link from "next/link";

import stl from "./navbar.module.css";

const index = () => {
  return (
    <div className={stl.navWrapper}>
      <div className={stl.container}>
        <div>
          <Link href={"/"}>Home</Link>
        </div>
        <div>
          <Link href={"/timeline"}>Timeline</Link>
        </div>
        <div>
          <Link href={"/scroll"}>Scroll</Link>
        </div>
        <div>
          <Link href={"/posts"}>Posts</Link>
        </div>
        <div>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div>
          <Link href={"/auth/signin"}>Signin</Link>
        </div>
      </div>
    </div>
  );
};

export default index;
