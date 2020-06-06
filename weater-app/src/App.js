import React from 'react';

import './App.css';
import Header from './components/Header';
import WeatherData from './components/WeatherData';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <Header />
          <WeatherData />
        </div>
      </div>

    </div>
  );
}

export default App;
