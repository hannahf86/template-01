// GET - gets data
// POST - creates new data
// DELETE - deletes data
// PATCH - updates data

// REQUIRED
const express = require('express')
const router = express.Router();
const BasicPost = require('../Models/basicSchema')

// GET all
router.get('/', (req, res) => {
    res.json({mssg: "GET all data"})
})

// GET single data
router.get('/:id', (req, res) => {
    res.json({mssg: "GET single data"})
})

// POST create data
router.post('/', async (req, res) => {
    const { title, subtitle, tags, newPost } = req.body;

    try {
        const newArticle = await BasicPost.create({ title, subtitle, tags, newPost  })
        res.status(200).json(newArticle)
    } catch (error) {
        res.status(400).json({error: error})
    }
})

// DELETE data
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE single data"})
})

// PATCH or update data
router.patch('/:id', (req, res) => {
    res.json({mssg: "PATCH or update single data"})
})

module.exports = router