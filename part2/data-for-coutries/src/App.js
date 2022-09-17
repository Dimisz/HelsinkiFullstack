import axios from "axios";

import { useState, useEffect } from 'react';

import CountryName from "./components/CountryName";

const App = () => {
  const [data, setData] = useState([]);

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

  return (
    <>
      <h1>Hi there</h1>
      <CountryName countries={data} />
    </>
  );
}

export default App;
