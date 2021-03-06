import React, { Component } from 'react';

import './assets/css/tailwind.css';

import Global from './containers/Global';
import Indonesia from './containers/Indonesia';
import Search from './containers/Search';

class App extends Component {
  render() {
    return(
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-pink-800">Covid 19</h1>

        <Global />

        <Indonesia />

        <Search />
      </div>
    );
  };
};

export default App;
