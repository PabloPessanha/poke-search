import React from 'react';
import { fetch1stGenPokemons } from '../../services/pokemonApi';

const Home = () => {
  const response = async () => console.log(await fetch1stGenPokemons());
  response();

  return (
    <div>
      Página Home
    </div>
  );
};

export default Home;
