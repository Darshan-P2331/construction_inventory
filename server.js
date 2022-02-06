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

app.use('/user',require('./routes/userRoutes'))
app.use('/constructions',require('./routes/constructionsRoutes'))
app.use('/workers',require('./routes/workerRoutes'))
app.use('/transactions',require('./routes/transactionsRoutes'))
app.use('/materials',require('./routes/materialRoutes'))

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('listening on port ' + port)
})