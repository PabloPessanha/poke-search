async function fetchPreviewInfos(id) {
  try {
    const endpoint = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const { types: reqTypes } = await endpoint.json();
    const types = reqTypes.map(({ type: { name } }) => name);
    const infos = { types, image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` };
    return infos;
  } catch (error) {
    return { error: 'Not Found' };
  }
}

export async function fetch1stGenPokemons() {
  try {
    const endpoint = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const { results } = await endpoint.json();
    const allPreviewInfos = await Promise.all(
      results.map(async ({ name }, index) => {
        const number = index + 1;
        const infos = await fetchPreviewInfos(index + 1);
        return { name, ...infos, number };
      }),
    );
    return allPreviewInfos.filter(({ error }) => !error);
  } catch (error) {
    return { error: 'Not Found' };
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
