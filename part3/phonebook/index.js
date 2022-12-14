const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 3001

app.use(express.json())

// const requestLogger = (request, response, next) => {
//     console.log('Method:', request.method)
//     console.log('Path:  ', request.path)
//     console.log('Body:  ', request.body)
//     console.log('---')
//     next()
// }
// const requestLogger = morgan('tiny')

// app.use(requestLogger)
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));

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

const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(n => n.id))
        : 0
    return maxId + 1
}
app.post('/api/persons', (req, res) => {
    const body = req.body
    if(!body.name){
        return res.status(400).json({
            error: 'name missing'
        })
    }
    else if(!body.number){
        return res.status(400).json({
            error: 'number missing'
        })
    }

    const personNameExists = persons.find(person => person.name === body.name)
    if(personNameExists){
        return res.status(400).json({
            error: `A person with name ${body.name} already exists`
        })
    }

    const personNumberExists = persons.find(person => person.number === body.number)
    if(personNumberExists){
        return res.status(400).json({
            error: `Number: ${body.number} already exists`
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)
    res.json(persons)
})


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)


app.listen(PORT, () => {
    console.log(`Server runnning on port ${PORT}`)
})


