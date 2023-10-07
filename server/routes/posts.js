const express = require('express')
const BlogPosts = require('../controllers/posts.js')

const router = express.Router()

router.get('/posts', BlogPosts.getPosts)
router.get('/posts/:id', BlogPosts.getPostsById)

// new routes to create, update, and delete blog posts




module.exports = router
