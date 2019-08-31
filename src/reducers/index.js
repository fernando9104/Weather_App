import { combineReducers } from 'redux';
import {    cities, 
            getForecastDataFromCities as _getForecastDataFromCities, 
            getWeatherCities as _getWeatherCities } from './cities';
import { city, getCity as _getCity } from './city';
import { createSelector } from 'reselect';

export default combineReducers({
    city,
    cities   
});

export const getCity = createSelector ( state => state, _getCity  );
export const getForecastDataFromCities = createSelector( 
                    state => state.cities, 
                    getCity, 
                    _getForecastDataFromCities );

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities );                    