import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div className='weatherLocationCont' onClick={onWeatherLocationClick} >
        <Location city={ city } />
        { data ? 
            <WeatherData data={ data }/> : 
            <CircularProgress size={ 50 } thickness={4} /> 
        }
    </div>
);

// Tipa los parametros de la funcion
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default WeatherLocation;