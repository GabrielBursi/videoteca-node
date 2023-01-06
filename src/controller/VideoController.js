import { v4 as uuidv4 } from 'uuid'; 

import ModelVideo from "../model/Video.js";

export async function index(request, response) { 
    try {
        const video = await ModelVideo.find()
        response.status(200).json({video})
    } catch (error) {
        response.status(500).json({error: error.message})
    }
}

export async function store(req, res){
    const {title, link} = req.body

    if(!title || !link) return res.status(400).json({error: 'Missing title or link!'})

    const newVideo = new ModelVideo({
        _id: uuidv4(),
        title,
        link,
        liked: false
    })

    try {
        await newVideo.save()
        return res.status(201).json({message: 'Video added succesfully!'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export async function update(req, res){
    const {title, link} = req.body

    if(!title || !link) return res.status(400).json({error: 'Missing title or link!'})

    res.video.title = title
    res.video.link = link
    
    try {
        await res.video.save()
        return res.status(200).json({message: 'Video edited succesfully'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export async function deleteVideo(req, res){
    try {
        await res.video.remove()
        return res.status(200).json({message: 'Video deleted succesfully'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
