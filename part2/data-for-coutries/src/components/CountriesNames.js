import ShowButton from "./ShowButton";

const CountriesNames = ({ countries, showHandler }) => {
    return (
        <>
            {countries.map((country) => (
                <p key={country.name.common}>
                    {country.name.common} <ShowButton showHandler={() => showHandler(country.name.common)}/>
                </p>
            ))}
        </>
    )
}

export default CountriesNames;