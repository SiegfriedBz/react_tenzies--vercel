const express = require('express')
const cors = require('cors')
const allowedOrigins = ['http://localhost:3000']

const app = express()
app.use(express.json())
app.use(cors({origin: allowedOrigins}))

let data = [
    { id: 1, content: 'note from express', important: true }
]

const BASE_URL = '/api'

// index
app.get(BASE_URL, (req, res) => {
    res.json(data)
})

// show
app.get(`${BASE_URL}/:id`, (req, res) => {
    const id = parseInt(req.params.id)
    const datum = data.find(d => d.id === id)
    if (datum) {
       res.json(datum)
    } else {
        res.redirect('/404')
    }
})

// create
app.post(`${BASE_URL}`, (req, res) => {
    const body = req.body
    data = [...data, body]
    res.json(data)
})

// update
app.patch(`${BASE_URL}/:id`, (req, res) => {
    const id = parseInt(req.params.id)
    const body = req.params.body
    let datum = data.find(d => d.id === id)
    if (datum) {
        datum = {...datum, ...body}
        data = data.map(d => {
            return d.id !== id ? d : datum
        })
        res.json(datum)
    } else {
        res.redirect('/404')
    }
})

// delete
app.delete(`${BASE_URL}/:id`, (req, res) => {
    const id = parseInt(req.params.id)
    const datum = data.find(d => d.id === id)
    if (datum) {
        data = data.filter(d => d.id !== id)
        res.json((datum))
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
