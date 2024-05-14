import { connectMongoDB } from "@/lib/mongodb";
import { POST } from "../route";
import { NextResponse } from "next/server";
import Post from "@/models/post";

export async function GET(req, { params }) {
    await connectMongoDB();
    const {id} = params;
    const post = await Post.findOne({ _id: id })
    return NextResponse.json({ post }, {status: 200});
}

export async function PUT(req, { params }) {
    await connectMongoDB();
    const {id} = params;
    const { newtitle: title, newimg: img, newowner: owner, newcontent: content, newbackground: background } = await req.json();
    await Post.findByIdAndUpdate(id, { title, img, owner, content, background })
    return NextResponse.json({ message: "Post updated" }, {status: 200});
}