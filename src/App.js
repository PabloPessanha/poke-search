import React from 'react';
import Routes from './routes';
import './GlobalStyles.css';
import PokemonProvider from './providers/PokemonProvider';

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <Routes />
      </PokemonProvider>
    </div>
  );
}

export default App;
