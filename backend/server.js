// REQUIRED
const express = require('express')
require('dotenv').config()
const templateRoutes = require('./routes/routes')

// ROUTES


// EXPRESS APP
const app = express()

    // middleware
    app.use(express.json())
    app.use((req,res,next) => {
        console.log(req.path, req.method)
        next()
    })

// LISTEN
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT) 
})

// ROUTE HANDLER
app.use('/api/routes', templateRoutes)