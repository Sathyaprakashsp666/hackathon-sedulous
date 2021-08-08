const express = require("express")
const router = express.Router()
const Course = require("../models/courses.model")

router.get('/', async(req, res) => {
    const courses = await Course.find({}).lean().exec()
    return res.status(200).json({data:courses})
})

router.get('/:id', async(req, res) => {
    const courseId = req.params.id
    const courses = await Course.findById(courseId).lean().exec()
    return res.status(200).json({data:courses})
})

router.post("/", async (req, res) =>{
    try{
        const courses = await Course.create(req.body);
    return res.status(201).json({ data : courses })
    }
    catch(err){
        console.log(err)
    }
})


module.exports = router