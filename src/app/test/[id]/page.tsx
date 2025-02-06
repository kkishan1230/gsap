import { revalidatePath } from "next/cache";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  const submitAction = async (event: any) => {
    "use server";

    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: event.get("title"),
        body: event.get("body"),
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    revalidatePath("/test/1");
  };

  return (
    <div>
      <form action={submitAction}>
        <div>
          <label htmlFor="title">Name</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input type="text" name="body" />
        </div>

        <button>Submit</button>
      </form>

      {posts?.map((item: any) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
