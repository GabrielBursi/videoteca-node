import express from "express";
import { index, store, update, deleteVideo } from "../controller/VideoController.js";
import {validateId} from '../middleware/VideoMiddleware.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello')
})

router.get('/videos', index)

router.post('/videos', store)

router.put('/videos/:id', validateId, update)

router.put('/videos/:id', validateId, deleteVideo)

export default router