const Country = ({ country }) => {
    return(
        <section>
            <h1>{country.name}</h1>
            <p>capital: {country.capital}</p>
            <p>area: {country.area}</p>
            <h2>languages</h2>
            <ul>
                {country.languages.map((lang) => (
                    <li>{lang}</li>
                ))}
            </ul>
            <img width="50px" height="50px" href={country.flag}></img>
        </section>
    )
}

export default Country;