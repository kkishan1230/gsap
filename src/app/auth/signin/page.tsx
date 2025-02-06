"use client";

import React, { useState } from "react";
import stl from "./signin.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailHandler = (e: any) => {
    setError("");
    setEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    setError("");
    setPassword(e.target.value);
  };

  const signInHanlder = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password required.");
      throw new Error("Email and password required.");
    }

    // Send request to server
  };

  // async function submitForm(formData: FormData) {
  //   "use server";

  //   const res = await fetch("/", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: formData.get("email"),
  //       body: formData.get("password"),
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });

  //   console.log(res);
  // }
  return (
    <div className={stl.container}>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={emailHandler} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={passwordHandler} />
        <button onClick={signInHanlder}>Submit</button>
        {error && (
          <ul style={{ padding: "20px", color: "red" }}>
            <li>Email and password required.</li>
          </ul>
        )}
      </form>
    </div>
  );
};

export default SignIn;
