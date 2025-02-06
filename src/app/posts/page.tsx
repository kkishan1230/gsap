import Card from "@/components/Card";
import Link from "next/link";

import stl from "./posts.module.css";

export default async function Page() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return (
    <div className={stl.container}>
      {posts?.slice(0, 8).map((item: any) => (
        <Link href={`/posts/${item.id}`}>
          <Card {...item} key={item.id} />
        </Link>
      ))}
    </div>
  );
}
