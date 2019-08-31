import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    };

    const strToComponent = cities => (
        cities.map( city => 
            (
                <WeatherLocation 
                    key={city.key} 
                    city={city.name} 
                    onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
                    data = {city.data} 
                    />
            ) 
        )
    );
    
    return(
        <div className='locationList'>
            { strToComponent( cities ) }
        </div>
    );
};

// Tipa los parametros de la funcion
LocationList.propTypes = {
    cities : PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired
};

export default LocationList;