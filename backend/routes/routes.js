// REQUIRED
const express = require('express')
const router = express.Router();

// CONTROLLERS
const { createArticle, getArticles, getArticle, deleteArticle, updateArticle } = require('../Controllers/controllers')


// GET all
router.get('/', getArticles)

// GET single data
router.get('/:id', getArticle)

// POST create data
router.post('/', createArticle)

// DELETE data
router.delete('/:id', deleteArticle)

// PATCH or update data
router.patch('/:id', updateArticle)

module.exports = router