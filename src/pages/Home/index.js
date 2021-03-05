import React, { useContext } from 'react';
import { PokemonCard, PokemonFilters, Loading } from '../../components';
import { pokemonContext } from '../../providers/PokemonProvider';

const Home = () => {
  const { isLoading, dataFiltered } = useContext(pokemonContext);

  if (isLoading) return <Loading />;
  return (
    <div className="pokemons">
      <PokemonFilters />
      { dataFiltered.map((pokemon) => (
        <PokemonCard key={ pokemon.name } data={ pokemon } id={ pokemon.number } />
      )) }
    </div>
  );
};

export default Home;
