// REQUIRED
const express = require('express')
require('dotenv').config()


// EXPRESS APP
const app = express()

    // middleware
    app.use((req,res,next) => {
        console.log(req.path, req.method)
        next()
    })

// LISTEN
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT) 
})

// ROUTE HANDLER
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})