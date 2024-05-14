"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Deletebtn from "@/app/components/Delete/deletebtn";

export default function Page({ params }) {
    const { id } = params;

    const [postData, setPostData] = useState("");

    const getPostById = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
                method:"GET",
                cache:"no-store"
            })

            if(!res.ok){
                throw new Error("Fail to fetch a post")
            }

            const data = await res.json();
            console.log("open page_id: ", data);
            setPostData(data.post);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      getPostById(id);
    }, [])
    


  return (
    <div>
      <div className="relative text-center w-full h-screen pt-40">
        <div className=" pt-40 absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
          <div className="text-6xl font-bold">{postData.title}</div>
        </div>
        <img
          src={postData.background}
          className=" inset-0 w-full h-full object-cover"
          alt={postData.title}
        />
      </div>
      <div className=" text-sm p-10 md:p-40 md:pb-10 md:text-xl font-extralight">
      {postData.content}
      </div>
      <div className="flex justify-end pr-10">
        <Link href={`/pages/edit/${postData._id}`} className="bg-green-300 mr-3 rounded-md text-center px-2 text-white">Edit</Link>
        <Deletebtn id={postData._id}/>
      </div>
    </div>
  );
}