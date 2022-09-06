const Persons = ({personsList}) => {
    return (
        <>
        {personsList.map((person) => (
            <p key={person.id}>{person.name} {person.number}</p>
        ))}
        </>
    )
}

export default Persons;