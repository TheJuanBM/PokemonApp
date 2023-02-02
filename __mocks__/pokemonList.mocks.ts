export const mockPokemonDataResponse = {
  count: 1279,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    }
  ]
}

export const mockDetailPokemon = {
  id: 1,
  types: [
    {
      type: { name: 'grass' }
    },
    { type: { name: 'position' } }
  ],
  abilities: [
    {
      ability: { name: 'overgrow' }
    },
    {
      ability: { name: 'chlorophyll' }
    }
  ]
}
