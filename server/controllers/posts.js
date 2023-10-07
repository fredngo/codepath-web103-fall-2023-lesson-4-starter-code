import Post from '../models/post.js'

const getPosts = async (req, res) => {
  try {
    const results = await Post.findAll()
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getPostsById = async (req, res) => {
  try {
    const results = await Post.findOne(req.params.id)
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

// create new blog post



// update existing blog post



// delete existing blog post




export default {
  getPosts,
  getPostsById
}