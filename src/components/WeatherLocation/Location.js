import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => {
    return ( 
        <div className='locationCont'>
            <h1>
                { city }
            </h1>
        </div> 
    );
};

// Tipa los parametros de la funcion
Location.propTypes = {
    city: PropTypes.string.isRequired,
};


export default Location;