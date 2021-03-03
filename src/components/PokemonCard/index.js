import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonCard = ({ data: { name, image, types }, pokeNum }) => {
  let pokemonNumber = `00${pokeNum}`;
  if (pokeNum > 10 && pokeNum < 100) pokemonNumber = `0${pokeNum}`;
  if (pokeNum >= 100) pokemonNumber = pokeNum;

  return (
    <div className="pokemon-card">
      <Link to={ `/${pokeNum}` }>
        <div className="pokemon-image">
          <img src={ image } alt={ `${name}-thumb` } />
        </div>
        <div className="pokemon-infos">
          <h1>{name}</h1>
          { types.map((type) => (
            <span key={ `${name}-${type}` }>
              {type}
              {' '}
            </span>
          ))}
          <h4>{`No.${pokemonNumber}`}</h4>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;

PokemonCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  pokeNum: PropTypes.number.isRequired,
};
