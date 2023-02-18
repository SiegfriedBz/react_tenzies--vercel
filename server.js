const express = require('express')
const cors = require('cors')

const ORIGIN = 'http://localhost:3000'
const EXPRESS_BASE_URL = '/api'

const app = express()

// middleware: json parser
app.use(express.json())
// middleware: cors
const allowedOrigins = [ORIGIN]
app.use(cors({origin: allowedOrigins}))

let notes = [
    { id: 1, content: 'note from express', important: true },
]

// index
app.get(EXPRESS_BASE_URL, (req, res) => {
    try{
        res.json(notes)
    } catch(error) {
        console.log(error)
    }
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`express listening to port ${PORT}`)
})
