import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../components';
import { fetchPokemon } from '../../services/pokemonApi';

const Details = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      setPokemon(await fetchPokemon(id));
      setIsLoading(!isLoading);
    };
    getPokemon();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div>
      <img src={ pokemon.sprites.front_default } alt="pokemon-thumb" />
      <h1>{pokemon.name}</h1>
      <h2>{`Peso: ${pokemon.weight} KG`}</h2>
    </div>
  );
};

export default Details;
