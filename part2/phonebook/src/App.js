import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const isDuplicate = (name) => {
    for(let i = 0; i < persons.length; i++){
      if(name === persons[i].name){
        alert(`${name} already added to the phone book`);
        return true;
      }
    }
    return false;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNameObj = {name: newName};
    if(!isDuplicate(newName)){
      setPersons(persons.concat(newNameObj));
    }
    setNewName('');
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={Math.random()}>{person.name}</p>
      ))}
    </div>
  )
}

export default App