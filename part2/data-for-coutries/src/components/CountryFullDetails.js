import axios from "axios";
import {useEffect, useState} from 'react';

const CountryFullDetails = ({ countries }) => {
    
    const [temperature, setTemperature] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [weatherIconAddress, setWeatherIconAddress] = useState('');

    const api_key = process.env.REACT_APP_API_KEY;
  //console.log(api_key);
    const getWeather = () => {
        axios 
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${countries[0].latlng[0]}&lon=${countries[0].latlng[1]}&units=metric&appid=${api_key}`)
        .then(response => {
            // console.log(response.data);
            setTemperature(response.data.main.temp);
            setWindSpeed(response.data.wind.speed);
            setWeatherIconAddress("https://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png");
            // console.log(response.data.main.temp);
            // console.log(response.data.wind.speed);
            // console.log(response.data.weather[0].icon);
            // console.log('got weather')
        })
    }

    useEffect(getWeather, []);

    return(
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
            <h2>Weather in {countries[0].capital[0]}</h2>
            <p>Temperature: {temperature} Celcius</p>
            <p><img src={weatherIconAddress}></img></p>
            <p>Wind Speed: {windSpeed} m/s</p>
        </section>
    )
}

export default CountryFullDetails;