import Link from "next/link";
import { posts } from "../../../../data/posts";

type Post = {
  id: string;
  title: string;
  date: string;
};

export async function generateStaticParams() {
  const ids: string[] = ["1", "2"];
  return ids.map((id) => ({ id: id }));
}
async function getPost(id: string) {
  const post = posts.find((post: Post) => post.id === id);
  return post;
}
export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPost(id);
  return (
    <>
      <h1>Posts Detail </h1>
      <div>
        <h1>{post!.title}</h1>
        <h1>{post!.date}</h1>
      </div>
      <Link href={"/"}>Home</Link>
      <Link href={"/posts"}>Back</Link>
    </>
  );
}
