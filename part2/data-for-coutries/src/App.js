import axios from "axios";

import { useState, useEffect } from 'react';

import Filter from "./components/Filter";
import CountriesRenderer from "./components/CountriesRenderer";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(data);

  const getDataFromRestCountries = () => {
    axios 
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        // console.log(response.data);
        setData(response.data)
        console.log('got data')
      })
      // console.log(data);
      // console.log("got")
  }

  useEffect(getDataFromRestCountries, []);

  const handleSearch = (event) => {
    const filterTerm = event.target.value;
    if(filterTerm.length === 0){
      setFilteredCountries(data);
    }
    else{
      setFilteredCountries(data.filter((country) => {
        return country.name.common.toLowerCase().includes(filterTerm);
      }))
      //console.log(filteredCountries.length);
    }
  }


  return (
    <>
      <h1>Hi there</h1>
      <Filter filterFunction={handleSearch}></Filter>
      <CountriesRenderer countries={filteredCountries} />
    </>
  );
}

export default App;
