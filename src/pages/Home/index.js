import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { PokemonCard, PokemonFilters, Loading } from '../../components';
import { pokemonContext } from '../../providers/PokemonProvider';
import './styles.css';

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
        containerClassName="pages-container"
        pageClassName="pages-option"
        activeClassName="active-page-btn"
        previousClassName="previous-page-btn"
        nextClassName="next-page-btn"
        disabledClassName="disabled-page-btn"
      />}
    </>
  );
};

export default Home;
