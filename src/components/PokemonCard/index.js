import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

const PokemonCard = ({ pokemons }) => {
  if (pokemons.length < 1) return <h1>No pokemons found with this fitlers.</h1>;
  return (
    <div className="pokemons">
      {pokemons.map(({ name, image, types, number: id }) => (
        <div className="pokemon-card" key={ name }>
          <Link to={ `/${id}` }>
            <div className="pokemon-image">
              <img src={ image } alt={ `${name}-thumb` } />
            </div>
            <div className="pokemon-infos">
              <h1>{name}</h1>
              <h4>{`No.${id}`}</h4>
              <div className="types-container">
                { types.map((type) => (
                  <span className={ `types ${type}` } key={ `${name}-${type}` }>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PokemonCard;

PokemonCard.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      types: PropTypes.arrayOf(PropTypes.string),
      number: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
