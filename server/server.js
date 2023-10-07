import express from 'express'
import './config/dotenv.js'

import router from './config/routes.js'

import setup from './db/setup.js'
setup()

const app = express()

app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
  res.send('<h1>Blog Posts API</h1>')
})

const PORT = process.env.PORT || 3000
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
