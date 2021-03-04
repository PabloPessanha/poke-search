import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonCard = ({ data: { name, image, types }, id }) => (
  <div className="pokemon-card">
    <Link to={ `/${id}` }>
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
        <h4>{`No.${id}`}</h4>
      </div>
    </Link>
  </div>
);

export default PokemonCard;

PokemonCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  id: PropTypes.number.isRequired,
};
