import React, { useState, useContext, useEffect } from 'react';
import { PokemonCard, Loading } from '../../components';
import { pokemonContext } from '../../providers/PokemonProvider';

const Home = () => {
  const [filters, setFilters] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const { data, isLoading, allTypes, setAllTypes } = useContext(pokemonContext);

  useEffect(() => {
    setDataFiltered(data);
  }, [data]);

  useEffect(() => {
    setDataFiltered(dataFiltered
      .filter(({ types }) => filters.every((type) => types.includes(type))));
  }, [filters]);

  function filterByType({ target: { className } }) {
    setFilters((currValue) => {
      if (currValue.includes(className)) return currValue;
      return [...currValue, className];
    });
    setAllTypes(allTypes.filter((type) => !(filters.includes(type))));
  }

  if (isLoading) return <Loading />;
  return (
    <div className="pokemons">
      <div className="types">
        {allTypes.map((type, index) => (
          <button
            key={ `${type}-${index}` }
            type="button"
            className={ type }
            onClick={ filterByType }
          >
            {type}
          </button>
        ))}
      </div>
      { dataFiltered.map((pokemon) => (
        <PokemonCard key={ pokemon.name } data={ pokemon } id={ pokemon.number } />
      )) }
    </div>
  );
};

export default Home;
