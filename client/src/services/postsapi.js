import { request } from '../utilities/api'

const postsURL = '/api/posts'

const getAllPosts = () => request('GET', postsURL)
const getPostsById = (id) => request('GET', `${postsURL}/${id}`)

// new functions to create, update, and delete blog posts




export default {
    getAllPosts,
    getPostsById
}