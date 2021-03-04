import React, { useState, useContext, useEffect } from 'react';
import { PokemonCard, Loading } from '../../components';
import { pokemonContext } from '../../providers/PokemonProvider';

const Home = () => {
  const [filters, setFilters] = useState([]);
  const {
    data,
    dataFiltered,
    setDataFiltered, isLoading, allTypes, setAllTypes } = useContext(pokemonContext);

  useEffect(() => {
    setDataFiltered(data
      .filter(({ types }) => filters.every((type) => types.includes(type))));
    setAllTypes(allTypes.filter((type) => !(filters.includes(type))));
  }, [filters]);

  function filterByType({ target: { className } }) {
    setFilters((currValue) => {
      if (currValue.includes(className)) return currValue;
      return [...currValue, className];
    });
  }

  function removeFilter({ target: { className } }) {
    return setFilters((currValue) => currValue.filter((type) => type !== className));
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
        <br />
        <div className="remove-buttons">
          {filters.map((type) => (
            <button
              type="button"
              key={ `remove-${type}` }
              className={ type }
              onClick={ removeFilter }
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      { dataFiltered.map((pokemon) => (
        <PokemonCard key={ pokemon.name } data={ pokemon } id={ pokemon.number } />
      )) }
    </div>
  );
};

export default Home;
