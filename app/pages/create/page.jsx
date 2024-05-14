"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [owner, setOwner] = useState("");
  const [background, setBack] = useState("");

  const router = useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!title || !background || !content || !owner || !img ) {
      alert("Please complete all inputs")
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/posts",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, owner, background, content, img })
      })

      if (res.ok) {
        router.push("/pages/pageAllproject");
      } else{
        throw new Error("failed to create a post")
      }
    } catch (error) {
      console.log("fail",error);
    }
  };

  return (
    <div className="container mx-auto pt-52 pl-10">
      <h3 className="text-3xl font-bold">Create Post</h3>
      <hr className="my-3" />
      <Link
        href="/"
        className="bg-gray-500 inline-block text-white border py-2 rounded-md px-3 my-2"
      >
        Go Back
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-2 rounded-md text-lg my-2"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-2 rounded-md text-lg my-2"
          placeholder="Post background"
          value={background}
          onChange={(e) => setBack(e.target.value)}
        />
        <input
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-2 rounded-md text-lg my-2"
          placeholder="Post owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          className="w-[300px] block bg-gray-200 border py-2 px-2 rounded-md text-lg my-2"
          placeholder="Post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-2 rounded-md text-lg my-2"
          placeholder="Post img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2"
        >
          Create
        </button>
      </form>
    </div>
  );
}
