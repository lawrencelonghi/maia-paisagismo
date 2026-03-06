import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.dev' })

const PORT = process.env.PORT

const app = express()

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

app.get('/ping', (req, res) => {
  res.json({status: 'pong'})
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})