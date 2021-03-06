import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { PokemonCard, PokemonFilters, Loading } from '../../components';
import { pokemonContext } from '../../providers/PokemonProvider';

const Home = () => {
  const { isLoading, dataFiltered } = useContext(pokemonContext);
  const [pageNumber, setPageNumber] = useState(0);

  const pokemonsPerPage = 30;
  const pagesVisited = pageNumber * pokemonsPerPage;

  const displayPokemons = dataFiltered
    .slice(pagesVisited, pagesVisited + pokemonsPerPage);

  const pageCount = Math.ceil(dataFiltered.length / pokemonsPerPage);
  const changePage = ({ selected }) => setPageNumber(selected);

  if (isLoading) return <Loading />;
  return (
    <>
      <PokemonFilters />
      <PokemonCard pokemons={ displayPokemons } />
      { pageCount > 1 && <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={ pageCount }
        onPageChange={ changePage }
      />}
    </>
  );
};

export default Home;
