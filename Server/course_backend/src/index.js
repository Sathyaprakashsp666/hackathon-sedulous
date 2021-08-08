const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const courseController = require("./controllers/courses.controller")

app.use('/career', courseController)

module.exports = app