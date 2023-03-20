const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// Init App 

const app = express()

// middleware

app.use(express.json())
app.use((req , res , next) => {
    console.log(req.path , req.method)
    next()
})

// Routes

app.use('/api/workouts',workoutRoutes)


// Connect to db 
mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            // listen for request
            app.listen(process.env.PORT || 4000,() => {
                console.log("Connected to the mongoose database  request on port number 4000")
            
            })
        })
        .catch(error => {
            console.log(error)
        })

// listen for request 

