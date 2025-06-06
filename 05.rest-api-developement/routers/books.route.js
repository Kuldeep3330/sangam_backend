const express= require('express')
const { getAllBooks } = require('../controllers/books.controller.js')
const router= express.Router()

router.get('/',getAllBooks)

module.exports= router