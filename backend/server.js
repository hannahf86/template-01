// REQUIRED
require('dotenv').config()
const express = require('express')
const templateRoutes = require('./routes/routes')
const mongoose = require('mongoose')

// EXPRESS APP
const app = express()

    // middleware
    app.use(express.json())
    app.use((req,res,next) => {
        console.log(req.path, req.method)
        next()
    })

// ROUTE HANDLER
app.use('/api/routes', templateRoutes)

// CONNECT TO MONGODB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        // LISTEN
        app.listen(process.env.PORT, () => {
            console.log('connected to the db & listening on port', process.env.PORT) 
        })
    }) .catch ((error) => {
        console.log(error)
    })