import React from 'react';
import PropTypes from 'prop-types';

const PokemonDetail = ({ pokemon: { name, weight, sprites } }) => (
  <div>
    <img src={ sprites.front_default } alt="pokemon-thumb" />
    <h2>{name}</h2>
    <h4>{`Peso: ${weight} KG`}</h4>
  </div>
);

export default PokemonDetail;

PokemonDetail.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
