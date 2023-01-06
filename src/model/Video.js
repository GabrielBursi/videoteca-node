import mongoose from "mongoose";

const Schema = mongoose.Schema

const VideoSchema = new Schema({
    _id : {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    liked: {
        type: Boolean,
        default: false
    }
})

const ModelVideo = mongoose.model('video',VideoSchema)

export default ModelVideo