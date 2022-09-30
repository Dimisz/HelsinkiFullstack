import { useState, useEffect } from 'react'
import axios from 'axios';

import server from './services/serverConnection';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  /*
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])*/
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);

  // const getPersonsHook = () => {
  //   axios 
  //     .get('http://localhost:3001/persons')
  //     .then(response => {
  //       console.log('promise fulfilled');
  //       setPersons(response.data)
  //     })
  // }

  // useEffect(getPersonsHook, []);
  const getPersonsFromServer = () => {
    server.getAll()
                  .then(response => {
                    console.log(`getAll response: ${response}`)
                    setPersons(response)
                    setFilteredPersons(response)
                  })
  }

  useEffect(() => getPersonsFromServer, [])

  //USE THIS WAY TO ENSURE STATE IS UP TO DATE
  useEffect(()=>{
    setFilteredPersons(persons)
  }, [persons])


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
        if(window.confirm(`${newPerson.name} already added to the phone book. Replace phone number with a new one?`)){
          const newNameObj = {name: newPerson.name, number: newPerson.number, id: newPerson.name + newPerson.number};
          server.update(persons[i].id, newNameObj)
            .then((response) => {
              console.log('deleted')
              // console.log(response)
              getPersonsFromServer();
              console.log('updated user')
            })
          //console.log(`delete with id: ${arg.id}`)
        }
        //alert(`${newPerson.name} already added to the phonebook`);
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
    if(!newName){
      alert("Name field should not be empty")
    }
    else if(!newNumber){
      alert("Phone-number field should not be empty")
    }
    else{
      const newNameObj = {name: newName, number: newNumber, id: newName+newNumber};
      if(!isDuplicate(newNameObj)){
        server
            .create(newNameObj)
            .then(response => {
              console.log(`Creating new name: ${response}`)
             
              setPersons(persons.concat(newNameObj));
              setFilteredPersons(persons);
            })
      
        setNewName('');
        setNewNumber('');
      }
    }
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

  const handleDelete = (arg) => {
    if(window.confirm(`Delete ${arg.name}?`)){
    server
      .deleteContact(arg.id)
      .then((response) => {
        console.log('deleted')
        // console.log(response)
        getPersonsFromServer();

      })
    console.log(`delete with id: ${arg.id}`)
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
      <Persons personsList={filteredPersons} handleDelete={handleDelete}/>
    </div>
  )
}

export default App