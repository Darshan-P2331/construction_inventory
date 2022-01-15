const express = require('express')
const cors = require('cors')
const db = require('./sql')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

db.connect((err) => {
    if (err) {
        console.log(err)
    }
    console.log('Connected to database')
})

app.get('/',(req, res) => {
    res.send("working")
})

app.use('/user',require('./routes/userRoutes'))

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('listening on port ' + port)
})