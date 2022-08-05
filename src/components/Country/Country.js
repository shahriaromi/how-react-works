import React from 'react';
import './Country.css';

const Country = (props) => {
  return (
    <div className="country">
      <h3>name: {props.country.name.common}</h3>
      <p>population: {props.country.population}</p>
      <p>capital: {props.country.capital}</p>
    </div>
  );
};

export default Country;
