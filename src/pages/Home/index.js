import React, { useContext } from 'react';
import { PokemonCard, Loading } from '../../components';
import { pokemonContext } from '../../providers/PokemonProvider';

const Home = () => {
  const {
    isLoading,
    dataFiltered,
    filters,
    typesFiltered,
    filterByType,
    removeFilter } = useContext(pokemonContext);

  if (isLoading) return <Loading />;
  return (
    <div className="pokemons">
      <div className="types">
        {typesFiltered.map((type, index) => (
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
