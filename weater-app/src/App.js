import React from 'react';

import './App.css';
import Header from './components/Header';
import WeatherLocation from './components/WeatherLocation';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <Header />
          <WeatherLocation />
        </div>
      </div>

    </div>
  );
}

export default App;
