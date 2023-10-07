import express from 'express'

import PostsController from '../controllers/posts.js'

const router = express.Router()

router.get('/posts', PostsController.index)
router.get('/posts/:id', PostsController.show)

// new routes to create, update, and delete blog posts
router.post('/posts', PostsController.create)
router.patch('/posts/:id', PostsController.update)
router.delete('/posts/:id', PostsController.delete)

export default router
