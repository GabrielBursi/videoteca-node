import ModelVideo from "../model/Video.js";
import {validate} from 'uuid'

export async function validateId(req, res, next){
    const {id} = req.params

    if(!validate(id)) return res.status(400).json({error: "Invalid ID !"})

    try {
        const video = await ModelVideo.findById(id)
        res.video = video
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    next()
}