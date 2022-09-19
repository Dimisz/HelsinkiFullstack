import axios from "axios";

import { useState, useEffect } from 'react';

import Filter from "./components/Filter";
import CountriesRenderer from "./components/CountriesRenderer";

//https://api.openweathermap.org/data/2.5/weather?name=London&appid=cb61aeb8b10e911bdce5e58ba935c84c
const App = () => {
  const [data, setData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(data);
  

  // show a country info when button clicked
  const showHandler = (arg) => { // SEE CountriesNames FOR IMPLEMENTATION OF PROP PUSHING
    setFilteredCountries(data.filter((country) => {
      return country.name.common.toLowerCase().includes(arg.toLowerCase());
    }))
    
    console.log(arg);
    console.log("btn clicked");
  }

  const getDataFromRestCountries = () => {
    axios 
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        // console.log(response.data);
        setData(response.data)
        console.log('got data')
      })
  }

  useEffect(getDataFromRestCountries, []);

  const handleSearch = (event) => {
    const filterTerm = event.target.value;
    if(filterTerm.length === 0){
      setFilteredCountries(data);
    }
    else{
      setFilteredCountries(data.filter((country) => {
        return country.name.common.toLowerCase().includes(event.target.value);
      }))
    }
  }


  return (
    <>
      <h1>Hi there</h1>
      <Filter filterFunction={handleSearch}></Filter>
      <CountriesRenderer countries={filteredCountries} showHandler={showHandler}/>
    </>
  );
}

export default App;
