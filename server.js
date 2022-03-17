import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname + '/dist/')))

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
