import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import { connect } from 'react-redux';
import { getForecastDataFromCities, getCity } from './../reducers';

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forescastData } = this.props;
        return (
            city && 
            <ForecastExtended city={city} forecastData={forescastData} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city:PropTypes.string.isRequired,
    forecastData: PropTypes.array
};

const mapStateToProps = (state) =>({ city: getCity(state), forescastData:getForecastDataFromCities(state) });

export default connect( mapStateToProps, null )( ForecastExtendedContainer );