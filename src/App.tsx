import React from 'react';
import './App.css';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
