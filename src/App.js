import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography  from '@material-ui/core/Typography';
import Toolbar  from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [
  "Cali, col",
  "Bogota, col",
  "Huila, col"
];

class App extends Component {
  render(){
    return (
        <Grid>
          <Row>
           <AppBar position='relative'>
             <Toolbar variant="dense">
               <Typography variant='h6' >
                 Weather App
               </Typography>
             </Toolbar>
           </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6} >
              <div className="App">
                <LocationListContainer cities={ cities } />
              </div>
            </Col>
            <Col xs={12} md={6} >
              <Paper elevation={4}>
                <div className='details'>
                  <ForecastExtendedContainer />:
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;

