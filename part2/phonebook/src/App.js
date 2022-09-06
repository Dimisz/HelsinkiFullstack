import { useState } from 'react'

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

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
    const newNameObj = {name: newName, number: newNumber, id: persons.length + 1};
    if(!isDuplicate(newNameObj)){
      setPersons(persons.concat(newNameObj));
      setFilteredPersons(persons);
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
      //console.log(filteredPersons);
    }
  }

  

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterFunction={handleNamesFilter} />
      
      <PersonForm submitHandler={handleSubmit} 
                  handleNameChange={handleNewNameChange}
                  handleNumberChange={handleNewNumberChange}
                  nameValue={newName}
                  numberValue={newNumber}
      />
      
      <h2>Numbers</h2>
      <Persons personsList={filteredPersons} />
    </div>
  )
}

export default App