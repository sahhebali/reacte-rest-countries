import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, flag, capital, population, region } = props.country
    // console.log(props.country)
    return (
        <div className="country bg-info">
            <h4 className="text-danger">This is : {name}</h4>
            <p> <small>{region}</small></p>
            <img src={flag} alt="" />
            <p>Capital : {capital} ,
                population : {population}
            </p>
        </div>
    );
};

export default Country;