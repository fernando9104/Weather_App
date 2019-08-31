import convert from 'convert-units';
import {
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
    CLOUD,
} from '../constants/Weather';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(0));
}

const getWeatherState = weather_data => {
    const { id } = weather_data;
    const icon  =   id < 300 ? THUNDER :
                    id < 400 ? DRIZZLE :
                    id < 600 ? RAIN :
                    id < 700 ? SNOW :
                    id === 800 ? SUN : CLOUD; 
    return icon;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);
    return({
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    });
}

export default transformWeather;