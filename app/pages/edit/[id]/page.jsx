"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EditPostPage({ params }) {
  const [postData, setPostData] = useState("");
  const [newtitle, setnewTitle] = useState("");
  const [newimg, setnewImg] = useState("");
  const [newcontent, setnewContent] = useState("");
  const [newowner, setnewOwner] = useState("");
  const [newbackground, setnewBack] = useState("");

  const { id } = params;
  const router = useRouter();

  const getPostById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Fail to fetch a post");
      }

      const data = await res.json();
      console.log("edit page_id: ", data);
      setPostData(data.post);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostById(id);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let editedData = {}; // สร้างออบเจ็กต์เพื่อเก็บข้อมูลที่จะแก้ไข

        // เช็คและกำหนดค่าข้อมูลที่จะแก้ไข ถ้าไม่กรอกข้อมูลใหม่ให้ใช้ข้อมูลเดิม
        if (newtitle) editedData.newtitle = newtitle;
        else editedData.newtitle = postData.title;

        if (newimg) editedData.newimg = newimg;
        else editedData.newimg = postData.img;

        if (newcontent) editedData.newcontent = newcontent;
        else editedData.newcontent = postData.content;

        if (newowner) editedData.newowner = newowner;
        else editedData.newowner = postData.owner;

        if (newbackground) editedData.newbackground = newbackground;
        else editedData.newbackground = postData.background;
    // ทำการแก้ไขโพสต์ด้วยข้อมูลใหม่
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      if (!res.ok) {
        throw new Error("Fail to edit the post");
      }

      // Redirect ไปยังหน้าที่ต้องการหลังจากแก้ไขโพสต์เสร็จ
      router.refresh();
      router.push("/pages/pageAllproject");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto pt-52 pl-10">
      <h3 className="text-3xl font-bold">Edit Post</h3>
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
          placeholder={postData.title}
          value={newtitle}
          onChange={(e) => setnewTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-2 rounded-md text-lg my-2"
          placeholder={postData.background}
          value={newbackground}
          onChange={(e) => setnewBack(e.target.value)}
        />
        <input
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-2 rounded-md text-lg my-2"
          placeholder={postData.owner}
          value={newowner}
          onChange={(e) => setnewOwner(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          className="w-[300px] block bg-gray-200 border py-2 px-2 rounded-md text-lg my-2"
          placeholder={postData.content}
          value={newcontent}
          onChange={(e) => setnewContent(e.target.value)}
        ></textarea>
        <input
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-2 rounded-md text-lg my-2"
          placeholder={postData.img}
          value={newimg}
          onChange={(e) => setnewImg(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2"
        >
          Edit
        </button>
      </form>
    </div>
  );
}
