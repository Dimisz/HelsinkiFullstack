import CountriesNames from "./CountriesNames";
import CountryFullDetails from "./CountryFullDetails";
const CountriesRenderer = ({ countries, showHandler }) => {
    if(countries.length === 1){
        return <CountryFullDetails countries={countries} />
    }
    else if(countries.length < 10){
        return <CountriesNames countries={countries} showHandler={showHandler}/>
    }
    else {
        return <p>Too many matches, specify another filter</p>
    }
}

export default CountriesRenderer; 