import express from "express"
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")

var router = require("./routes/index")

var app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use("/", router)
app.use("/users", router)

module.exports = app
