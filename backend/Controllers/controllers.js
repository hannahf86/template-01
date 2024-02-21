// REQUIRED
const BasicPost = require('../Models/basicSchema')
const mongoose = require('mongoose')

// GET all data
const getArticles = async (req, res ) => {
    const articles = await BasicPost.find({}).sort({createdAt: -1})

    res.status(200).json(articles)
}

// GET a single data
const getArticle = async (req, res) => {
    const { id } = req.params

    // checks _id for mongoDB
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No article found'})
    }

    const article = await BasicPost.findById(id)

    if (!article) {
        return res.status(404).json({error: 'No article found'})
    }

    res.status(200).json(article)
}

// POST/CREATE new data
const createArticle = async (req, res) => {
    const { title, subtitle, tags, newPost } = req.body;

    // add data to db
    try {
        const newArticle = await BasicPost.create({ title, subtitle, tags, newPost  })
        res.status(200).json(newArticle)
    } catch (error) {
        res.status(400).json({error: error})
    }
}

// DELETE single data
const deleteArticle = async (req, res) => {
    const { id } = req.params

    // checks _id for mongoDB
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No article found'})
    }

    const article = await BasicPost.findOneAndDelete({_id: id})

    if (!article) {
        return res.status(400).json({error: 'No article found'})
    }

    res.status(200).json(article)
}

// UPDATE data
const updateArticle = async ( req, res ) => {
    const { id } = req.params

    // checks _id for mongoDB
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No article found'})
    }

    const article = await BasicPost.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    // check article exists
    if (!article) {
        return res.status(400).json({error: 'No article found'})
    }

    res.status(200).json(article)

}




// EXPORTS
module.exports = {
    createArticle,
    getArticles,
    getArticle,
    deleteArticle,
    updateArticle
}
