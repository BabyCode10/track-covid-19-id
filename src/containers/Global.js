import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Card from '../components/Card';

class Indonesia extends Component {
  state = {
    cases: null,
    confirmend: null,
    recovered: null,
    deaths: null,
    lastUpdate: null,
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    days: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
  };

  componentDidMount() {
    axios.get('https://covid19.mathdro.id/api')
      .then( ( { data } ) => {
        const cases = data.confirmed.value;
        const recovered = data.recovered.value;
        const deaths = data.deaths.value;
        const convertDate = new Date( data.lastUpdate ).getTime();
        const date = new Date( convertDate );
        const lastUpdate = `${ this.state.days[ date.getDay() ] }, ${ date.getDate() } ${ this.state.months[ date.getMonth() ] } ${ date.getFullYear() }`;

        this.setState( { cases, recovered, deaths, lastUpdate } );
      } );
  };

  render() {
    return(
      <Fragment>
        <h1 className="text-4xl font-extrabold text-gray-800">Global</h1>

        <div className="flex flex-wrap items-center justify-center">
          <Card count={ this.state.cases } title={ "Cases" } updated={ this.state.lastUpdate } />

          <Card count={ this.state.recovered } title={ "Recovered" } updated={ this.state.lastUpdate }>
            <span className="bg-teal-600 text-gray-200 px-2 rounded-full text-sm">
              { ( this.state.recovered / this.state.cases * 100 ).toFixed( 1 ) }% Recovery Rate
            </span>
          </Card>

          <Card count={ this.state.deaths } title={ "Deaths" } updated={ this.state.lastUpdate }>
            <span className="bg-pink-600 text-gray-200 px-2 rounded-full text-sm">
              { ( this.state.deaths / this.state.cases * 100 ).toFixed( 1 ) }% Fatality Rate
            </span>
          </Card>
        </div>
      </Fragment>
    );
  };
};

export default Indonesia;