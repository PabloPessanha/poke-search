import React, { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetch1stGenPokemons } from '../services/pokemonApi';

export const pokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [allTypes, setAllTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const resetTypes = useCallback(() => {
    setAllTypes(
      data
        .map(({ types }) => types)
        .flat()
        .filter((type, index, array) => array.indexOf(type) === index),
    );
  });

  useEffect(() => {
    const getData = async () => setData(await fetch1stGenPokemons());
    getData();
  }, []);

  useEffect(() => {
    resetTypes();
    setDataFiltered(data);
    setIsLoading(false);
  }, [data]);

  const objectValue = {
    data,
    dataFiltered,
    setDataFiltered,
    isLoading,
    allTypes,
    setAllTypes,
    resetTypes,
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
