"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Deletebtn({id}) {
    const router = useRouter();
    const handleDelete = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/posts?id=${id}`,{
                method: "DELETE"
            })

            if (res.ok) {
                router.push("/pages/pageAllproject")
            }
        }
    }
  return (
    <div>
      <button onClick={handleDelete} className=" bg-red-300 mr-3 rounded-md text-center px-2 text-white">Delete</button>
    </div>
  )
}
