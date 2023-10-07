const express = require('express')
const { pool } = require('../config/database.js')

const getPosts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM blogposts ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}

const getPostsById = async (req, res) => {
    try {
        const postId = req.params.id
        const results = await pool.query('SELECT * FROM blogposts WHERE id = $1', [postId])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}

// create new blog post



// update existing blog post



// delete existing blog post




module.exports = {
    getPosts,
    getPostsById
}