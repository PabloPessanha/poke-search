async function fetchPreviewInfos(id) {
  try {
    const endpoint = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const { types: reqTypes } = await endpoint.json();
    const types = reqTypes.map(({ type: { name } }) => name);
    const infos = { types, image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` };
    return infos;
  } catch (error) {
    return error;
  }
}

export async function fetch1stGenPokemons() {
  try {
    const endpoint = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const { results } = await endpoint.json();
    const allPreviewInfos = await Promise.all(results.map(async (pokemon, index) => {
      const infos = await fetchPreviewInfos(index + 1);
      return {
        ...pokemon,
        ...infos,
      };
    }));
    return allPreviewInfos;
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
