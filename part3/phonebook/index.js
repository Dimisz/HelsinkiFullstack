const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>hello from phonebook</h1>')
})

app.get('/info', (req, res) => {
    const numPersons = persons.length
    res.write(`<p>Phonebook has info for ${numPersons} persons</p>`)
    res.write(`<p>${new Date().toISOString()}</p>`)
    res.end()
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if(person){
        res.json(person)
    }
    else {
        //res.write(`<h1>No person with id ${id} found</h1>`)
        res.status(404).end()
    }
})


app.delete('/api/persons/:id', (req, res) => {
    //console.log('received request')
    const id = Number(req.params.id)
    console.log(`${id}, ${typeof(id)}`)
    persons = persons.filter(person => person.id !== id)
    // res.status(204).end()
    
    if(persons){
        res.json(persons)
        res.status(204).end()
    }
    else{
        console.log(`no person with id ${id} found`)
        res.status(404).end()
    }
})

app.listen(PORT, () => {
    console.log(`Server runnning on port ${PORT}`)
})


