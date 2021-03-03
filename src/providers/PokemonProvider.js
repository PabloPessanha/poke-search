import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetch1stGenPokemons } from '../services/pokemonApi';

export const pokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => setData(await fetch1stGenPokemons());
    getData();
    setIsLoading(!isLoading);
  }, []);

  const objectValue = {
    data,
    isLoading,
  };

  return (
    <pokemonContext.Provider value={ objectValue }>
      {children}
    </pokemonContext.Provider>
  );
}

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
