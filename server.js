const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')
const allowedOrigins = ['http://localhost:3000']

const app = express()
app.use(express.json())
app.use(cors({origin: allowedOrigins}))

let notes = [
    { id: 1, content: 'note from express', important: true }
]

const BASE_URL = '/api/notes'

// index
app.get(BASE_URL, (req, res) => {
    res.json(notes)
})

// show
app.get(`${BASE_URL}/:id`, (req, res) => {
    const id = parseInt(req.params.id)
    const note = notes.find(n => n.id === id)
    if (note) {
       res.json(note)
    } else {
        res.redirect('/404')
    }
})

// create
app.post(`${BASE_URL}`, (req, res) => {
    const body = req.body
    const note = {...body, id: uuidv4() }
    notes = [...notes, note]
    res.json(notes)
})

// update
app.patch(`${BASE_URL}/:id`, (req, res) => {
    const id = parseInt(req.params.id)
    const body = req.params.body
    const note = notes.find(n => n.id === id)
    if (note) {
    notes = notes.map(n => n.id !== id ? n : note)
        res.json(notes)
    } else {
        res.redirect('/404')
    }
})

// delete
app.delete(`${BASE_URL}/:id`, (req, res) => {
    const id = parseInt(req.params.id)
    const note = notes.find(n => n.id === id)
    if (note) {
    notes = notes.filter(n => n.id !== id)
        res.json(notes)
    } else {
        res.redirect('/404')
    }
})

// error
app.get(`/404`, (req, res) => {
    res.send(`
        <h1>oups...page not found</h1>
    `)
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`express listening to port ${PORT}`)
})
