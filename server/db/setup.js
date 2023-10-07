import pool from '../config/database.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = fs.readFileSync(path.resolve(__dirname, 'data.json'), 'utf8')

const createBlogPostsTable = async () => {
  try {
    const createTableQuery = `
        DROP TABLE IF EXISTS blogposts;
        CREATE TABLE IF NOT EXISTS blogposts (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          content TEXT NOT NULL
        )
      `
    await pool.query(createTableQuery)
  } catch (error) {
    console.log(error)
  }
}

const insertBlogPosts = async () => {
  try {
    const insertQuery = `
        INSERT INTO blogposts (title, content)
        VALUES ($1, $2)
      `

    const blogPosts = JSON.parse(data)

    for (let post of blogPosts) {
      const values = [
        post.title,
        post.content
      ]

      await pool.query(insertQuery, values)
      console.log(`✅ added ${post.title}`)
    }
  } catch (error) {
    console.log(error)
  }
}

const setup = async () => {
  await createBlogPostsTable()
  await insertBlogPosts()
}

export default setup
