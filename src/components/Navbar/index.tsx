"use client";

import React from "react";
import stl from "./navbar.module.css";
import Link from "next/link";

const index = () => {
  return (
    <div className={stl.container}>
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div>
        <Link href={"/timeline"}>Timeline</Link>
      </div>
      <div>
        <Link href={"/about"}>About</Link>
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
  );
};

export default index;
