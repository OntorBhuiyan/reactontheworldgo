import './Country.css';
import React from 'react';
import { useState } from 'react';

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // if/else system
        // if (visited) {
        //     setVisited(false);
        // } else {
        //     setVisited(true);
        // }

        // ternary operator system
        // setVisited(visited ? false : true);

        // toggle system
        setVisited(!visited);
        
        handleVisitedCountries(country);
    }

    return (
        // < className={`country ${visited ? "country-visited" : "country-not-visited"}`}>
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h3>Name: {country.name.common}</h3>
            <h4>Population: {country.population.population}</h4>
            <h4>Capital: {country.capital.capital}</h4>
            <h4>Region: {country.region.region}</h4>
            <h4>Area: {country.area.area} - {country.area.area > 300000 ? "Big Country" : "Small Country"}</h4>
            <div className='clicked-buttons'>
                <button onClick={handleVisited}>
                    {visited ? "Visited" : "Not Visited"}
                </button>

                <button onClick={() => handleVisitedFlag(country.flags.flags.png)}>
                    Add Visited Flag
                </button>
            </div>
        </div>
    );
};

export default Country;