import Post from '../models/post.js'

const index = async (req, res) => {
  try {
    const results = await Post.findAll()
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const show = async (req, res) => {
  try {
    const results = await Post.findOne(req.params.id)
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

// create new blog post
const create = async (req, res) => {
  try {
    const { title, content } = req.body
    const results = await Post.create(title, content)
    res.status(201).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

// update existing blog post
const update = async (req, res) => {
  try {
    const { title, content } = req.body
    const results = await Post.update(req.params.id, title, content)
    res.status(201).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

// delete existing blog post
const deletePost = async (req, res) => {
  try {
    const results = await Post.delete(req.params.id)
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

export default {
  index,
  show,
  create,
  update,
  delete: deletePost
}