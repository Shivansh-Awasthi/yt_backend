import mongoose, { Schema } from "mongoose";


const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    videoFile: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    owner: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
}, { timestamps: true })



const Video = mongoose.model("Video", videoSchema);


module.exports = Video