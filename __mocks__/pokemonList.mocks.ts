export const mockPokemonDataResponse = {
  next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    },
    {
      name: 'Ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/'
    }
  ]
}

export const mockDetailPokemon = {
  id: 1,
  types: [
    {
      type: {
        name: 'grass'
      }
    },
    {
      type: {
        name: 'position'
      }
    }
  ],
  abilities: [
    {
      ability: {
        name: 'overgrow'
      }
    },
    {
      ability: {
        name: 'chlorophyll'
      }
    }
  ]
}

export const mockDetailPokemonTwo = {
  id: 2,
  types: [
    {
      type: {
        name: 'grass'
      }
    },
    {
      type: {
        name: 'position'
      }
    }
  ],
  abilities: [
    {
      ability: {
        name: 'overgrow'
      }
    },
    {
      ability: {
        name: 'chlorophyll'
      }
    }
  ]
}

export const mockPokemonSpecies = {
  color: {
    name: 'yellow'
  },
  generation: {
    name: 'generation-i'
  },
  egg_groups: [
    {
      name: 'monster'
    },
    {
      name: 'plant'
    }
  ]
}

export const mockPokemonSpeciesTwo = {
  color: {
    name: 'yellow'
  },
  generation: {
    name: 'generation-i'
  },
  egg_groups: [
    {
      name: 'monster'
    },
    {
      name: 'plant'
    }
  ]
}
