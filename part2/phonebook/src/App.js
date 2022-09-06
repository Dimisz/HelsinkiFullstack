import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

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

  

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (
        <p key={Math.random()}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App