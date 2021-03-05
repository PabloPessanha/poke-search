import React, { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetch1stGenPokemons } from '../services/pokemonApi';

export const pokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [allTypes, setAllTypes] = useState([]);
  const [typesFiltered, setTypesFiltered] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTypes = useCallback(() => {
    const newTypes = data.map(({ types }) => types)
      .flat()
      .filter((type, index, arr) => arr.indexOf(type) === index);
    setAllTypes(newTypes);
    setTypesFiltered(newTypes);
  });

  const filterByType = useCallback(({ target: { className } }) => {
    setFilters((currValue) => {
      if (currValue.includes(className)) return currValue;
      return [...currValue, className];
    });
  });

  const removeFilter = useCallback(({ target: { className } }) => {
    setFilters((currValue) => currValue.filter((type) => type !== className));
  });

  useEffect(() => {
    const getData = async () => setData(await fetch1stGenPokemons());
    getData();
  }, []);

  useEffect(() => {
    getTypes();
    if (data.length > 1) {
      setDataFiltered(data);
      setIsLoading(false);
    }
  }, [data]);

  useEffect(() => {
    setDataFiltered(data.filter(({ types }) => {
      return filters.every((type) => types.includes(type));
    }));

    setTypesFiltered(allTypes.filter((type) => !(filters.includes(type))));
  }, [filters]);

  const objectValue = {
    dataFiltered,
    typesFiltered,
    filters,
    isLoading,
    filterByType,
    removeFilter,
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
