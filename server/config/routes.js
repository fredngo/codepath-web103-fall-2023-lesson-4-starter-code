import express from 'express'

import PostsController from '../controllers/posts.js'

const router = express.Router()

router.get('/posts', PostsController.index)
router.get('/posts/:id', PostsController.show)

// new routes to create, update, and delete blog posts

export default router
