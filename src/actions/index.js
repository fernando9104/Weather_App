import getUrlForecastByCity from './../services/getUrlForecastByCity';
import transformForescast from './../services/TransformForecast';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformWeather from './../services/TransformWeather';

export const SET_CITY           = "SET_CITY";
export const SET_FORECAST_DATA  = "SET_FORECAST_DATA";
export const GET_WEATHER_CITY   = "GET_WEATHER_CITY";
export const SET_WEATHER_CITY   = "SET_WEATHER_CITY";

const getWeatherCity = payload => ({ type:GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type:SET_WEATHER_CITY, payload }); 
const setCity = payload => ({ type:SET_CITY, payload });
const setForecastData = payload => ({ type:SET_FORECAST_DATA, payload });

export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        dispatch( setCity(payload) );
        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();
        if( date && ( now-date) < 1 * 60 * 1000 ){ return }
        const url = getUrlForecastByCity( payload );
        return fetch( url ).then( data => {
            return data.json();
        }).then( weather_data => {
            const forecastData = transformForescast( weather_data );
            console.log(forecastData)
            dispatch( setForecastData({ city: payload, forecastData }) )
        });
    };
};

export const setWeather = payload => {
    return dispatch => {
        payload.forEach( city => {
            dispatch(getWeatherCity(city));
            const api_weather = getUrlWeatherByCity( city );
            fetch( api_weather ).then( resolve =>{
                return resolve.json();
            }).then( rawData => {
                const weather = transformWeather(rawData);
                dispatch(setWeatherCity({ city, weather })); 
            });
        });  
    }  
};

