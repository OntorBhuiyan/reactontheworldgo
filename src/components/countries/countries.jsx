import React, { use } from 'react';
import './countries.css';
import { useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const isExist = visitedCountries.find(c => c.cca3 === country.cca3);

        if (isExist) {
            const remaining = visitedCountries.filter(c => c.cca3 !== country.cca3);
            setVisitedCountries(remaining);
        } else {
            const newvisitedCountries = [...visitedCountries, country];
            setVisitedCountries(newvisitedCountries);
        }
    }

    const handleVisitedFlag = (flag) => {
        const isExist = visitedFlags.find(f => f === flag);

        if (isExist) {
            const remaining = visitedFlags.filter(f => f !== flag);
            setVisitedFlags(remaining);
        } else {
            const newVisitedFlags = [...visitedFlags, flag];
            setVisitedFlags(newVisitedFlags);
        }
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total Visited Flags: {visitedFlags.length}</h3>

            <div className='visited-flags'>
                {
                    visitedFlags.map((flag, index) => (
                        <img key={index} src={flag} alt="visited flag"/>
                    ))
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag} />)
                }
            </div>
        </div>
    );
};

export default Countries;