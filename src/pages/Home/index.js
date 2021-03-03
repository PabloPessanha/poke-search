import React, { useContext } from 'react';
import { PokemonCard, Loading } from '../../components';
import { pokemonContext } from '../../providers/PokemonProvider';

const Home = () => {
  const { data, isLoading } = useContext(pokemonContext);

  if (isLoading) return <Loading />;
  return (
    <div className="pokemons">
      { data.map((pokemon, index) => (
        <PokemonCard key={ pokemon } data={ pokemon } pokeNum={ index + 1 } />
      )) }
    </div>
  );
};

export default Home;
