import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE,
} from '../../../constants/Weather';
import  './styles.css';

// Nombres origianales de los iconos.
const icons = {
    [SUN]: 'day-sunny',
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers"
};

const getWeatherIcons = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = '3x';
    if ( icon ){
        return <WeatherIcons className='wicon' name={icon} size={sizeIcon} />;
    }else{
        return <WeatherIcons className='wicon' name={icons.sun} size='2x' />;
    }  
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureCont'>
        {
            getWeatherIcons( weatherState )
        }
        <span className='temperature' >{ `${ temperature }` }</span>
        <span className='temperatureType' >{ ` C°` }</span>
    </div>
);

// Tipa los parametros de la funcion
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;