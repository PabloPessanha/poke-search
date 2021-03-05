import React, { useContext } from 'react';
import { PokemonCard, PokemonFilters, Loading } from '../../components';
import { pokemonContext } from '../../providers/PokemonProvider';

const Home = () => {
  const { isLoading, dataFiltered } = useContext(pokemonContext);

  if (isLoading) return <Loading />;
  return (
    <>
      <PokemonFilters />
      <PokemonCard pokemons={ dataFiltered } />
    </>
  );
};

export default Home;
