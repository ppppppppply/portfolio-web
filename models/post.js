import mongoose, { Schema } from "mongoose"

const postSchema = new Schema(
    {
        title: String,
        background: String,
        owner: String,
        content: String,
        img: String
    },
    {
        timestamps: true
    }
)

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;