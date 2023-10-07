import express from 'express'

import PostsController from '../controllers/posts.js'

const router = express.Router()

router.get('/posts', PostsController.getPosts)
router.get('/posts/:id', PostsController.getPostsById)

// new routes to create, update, and delete blog posts

export default router