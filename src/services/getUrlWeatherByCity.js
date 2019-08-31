import { 
    url_base_weather, 
    api_key 
} from './../constants/ApiUrl';

const getUrlWeatherByCity = city => {
    return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;