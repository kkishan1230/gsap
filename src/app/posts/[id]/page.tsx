import { revalidatePath } from "next/cache";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${(await params).id}`
  );
  const post = await res.json();

  const deletePost = async () => {
    "use server";
    await fetch(
      `https://jsonplaceholder.typicode.com/posts/${(await params).id}`,
      {
        method: "DELETE",
      }
    );
    revalidatePath(`/posts/${(await params).id}`);
  };

  if (!post) {
    return <h2>No post found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <strong>Post number:</strong> {post.id}
      </div>
      <div>
        <strong>Post Title:</strong> {post.title}
      </div>
      <div>
        <strong>Post Body:</strong> {post.body}
      </div>
      <button onClick={deletePost}>Edit post</button>
    </div>
  );
}
