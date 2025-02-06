import React from "react";

const page = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const res = await data.json();
  console.log(res);
  return <div>{res?.userId}</div>;
};

export default page;
