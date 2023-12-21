const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Task forge server is running')
})
app.listen(port, (req, res) => {
    console.log(`Task Forge server is running on port ${port}`)
})