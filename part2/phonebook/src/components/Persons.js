import Button from "./Button";
import server from '../services/serverConnection';
const Persons = ({personsList, handleDelete}) => {
    return (
        <>
        {personsList.map((person) => (
            <p key={person.id}>
                {person.name} {person.number}
                <button onClick={() => handleDelete(person)}>delete</button>
                {/* <Button handleDelete={() => handleDelete(person.id)} /> */}
                
            </p>
            
        ))}
        </>
    )
}

export default Persons;