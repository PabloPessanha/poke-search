export async function fetch1stGenPokemons() {
  try {
    const endpoint = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const { results } = await endpoint.json();
    const previewWithImages = results.map((pokemon, index) => ({
      ...pokemon,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    }));
    return previewWithImages;
  } catch (error) {
    return error;
  }
}

export async function fetchPokemon(id) {
  try {
    const endpoint = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const pokemonData = await endpoint.json();
    return pokemonData;
  } catch (error) {
    return error;
  }
}
