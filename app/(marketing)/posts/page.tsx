"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { posts } from "../../../data/posts";

type Post = {
  id: string;
  title: string;
  date: string;
};
export default function Posts() {
  const router = useRouter();
  return (
    <>
      <h1>Posts List </h1>
      <div>
        {posts.map(({ id, title, date }: Post) => (
          <>
            <Link href={`/posts/${id}`}>{title} </Link>
            <p>{date}</p>
            <br />
          </>
        ))}
      </div>

      <Link href={"/"}>Home</Link>
    </>
  );
}
