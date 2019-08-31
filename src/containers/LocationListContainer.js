import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions';
import LocationList from './../components/LocationList';
import { getWeatherCities, getCity } from './../reducers';
import { bindActionCreators } from 'redux';

class LocationListContainer extends Component {
    handleSelectionLocation = city => {
        this.props.setSelectedCity(city);
    };
    componentDidMount() {  
        this.props.setWeather(this.props.cities);
        this.handleSelectionLocation(this.props.city);
    }
    render() {
        return (
            <LocationList 
                cities={ this.props.citiesWeather } 
                onSelectedLocation={this.handleSelectionLocation}
            />
        );
    }
}

LocationListContainer.propTypes = {
    citiesWeather: PropTypes.array.isRequired,
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array,
    city:PropTypes.string.isRequired
};

const mapStateToProps = state => ( { 
    citiesWeather: getWeatherCities(state),
    city: getCity(state) 
} );

const mapDispatchToProps = dispatch => bindActionCreators( actions, dispatch );
/*const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch( setSelectedCity(value) ),
    setWeather: cities => dispatch( setWeather(cities) )
});*/

export default connect( mapStateToProps, mapDispatchToProps )( LocationListContainer );
