import pool from '../config/database.js'

const findAll = () => {
  const query = 'SELECT * FROM blogposts ORDER BY title ASC'
  return pool.query(query)
}

const findOne = (id) => {
  const query = 'SELECT * FROM blogposts WHERE id = $1'
  return pool.query(query, [id])
}

const create = (title, content) => {
  const query = 'INSERT INTO blogposts (title, content) VALUES ($1, $2) RETURNING *'
  return pool.query(query, [title, content])
}

const update = (id, title, content) => {
  const query = 'UPDATE blogposts SET title = $1, content = $2 WHERE id = $3'
  return pool.query(query, [title, content, id])
}

const deletePost = (id) => {
  const query = 'DELETE FROM blogposts WHERE id = $1'
  return pool.query(query, [id])
}

export default {
  findAll,
  findOne,
  create,
  update,
  delete: deletePost
}
