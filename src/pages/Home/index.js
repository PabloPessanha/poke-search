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
    setDataFiltered((currValue) => currValue.filter(({ types }) => types
      .includes(...filters)));
  }, [filters]);

  function filterByType({ target: { className } }) {
    setFilters((currValue) => {
      if (currValue.includes(className)) return currValue;
      return [...currValue, className];
    });
    setAllTypes(allTypes.filter((type) => !(filters.includes(type))));
  }
  console.log(dataFiltered);
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
      { dataFiltered.map((pokemon, index) => (
        <PokemonCard key={ pokemon.name } data={ pokemon } pokeNum={ index + 1 } />
      )) }
    </div>
  );
};

export default Home;
