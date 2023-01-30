const express = require('express') // function formet
const app = express()
app.use(express.json())
const apiRouter =  require("./routers/api")
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/fargowiz',()=>{
    console.log("connect to DB fargowiz")
})








app.use('/api',apiRouter)
app.listen(5000)