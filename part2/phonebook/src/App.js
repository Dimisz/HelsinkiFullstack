import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const handleNewNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNewNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  const isDuplicate = (newPerson) => {
    for(let i = 0; i < persons.length; i++){
      if(newPerson.name === persons[i].name){
        alert(`${newPerson.name} already added to the phonebook`);
        return true;
      }
      else if(newPerson.number === persons[i].number){
        alert(`${newPerson.number} already added to the phonebook`);
        return true;
      }
    }
    return false;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNameObj = {name: newName, number: newNumber};
    if(!isDuplicate(newNameObj)){
      setPersons(persons.concat(newNameObj));
    }
    setNewName('');
    setNewNumber('');
  }

  const handleNamesFilter = (event) => {
    const filterTerm = event.target.value.toLowerCase();
    if(filterTerm.length === 0){
      setFilteredPersons(persons);
    }
    else{
      setFilteredPersons(persons.filter((person) => person.name.toLowerCase().includes(filterTerm)));
      console.log(filteredPersons);
    }
  }

  

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with
        <input onChange={handleNamesFilter} />
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <p key={Math.random()}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App