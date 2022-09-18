const CountryFullDetails = ({ countries }) => {
    // const country = countries[0];
    console.log(countries[0].name.common);
    console.log(countries[0].capital[0]);
    console.log(countries[0].languages);
    console.log(countries[0].flags.svg);
    return(
        // <p>hi therre</p>
        
        <section>
            <h1>{countries[0].name.common}</h1>
            <p>capital: {countries[0].capital[0]}</p>
            <p>area: {countries[0].area}</p>
            <h2>languages</h2>
            <ul>
                {Object.entries(countries[0].languages).map((pair) => <li key={pair[0]}>{pair[1]}</li>)}
            </ul>
            {countries[0].languages[0]}
            <img width="250px" height="150px" src={countries[0].flags.svg}></img>
        </section>
    )
}

export default CountryFullDetails;