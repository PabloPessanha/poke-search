import React, { useContext } from 'react';
import { pokemonContext as pokeContext } from '../../providers/PokemonProvider';
import './styles.css';

const PokemonFilters = () => {
  const { typesFiltered, filters, filterByType, removeFilter } = useContext(pokeContext);

  return (
    <div className="types-buttons">
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
  );
};

export default PokemonFilters;
