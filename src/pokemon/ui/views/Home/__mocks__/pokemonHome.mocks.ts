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
  weight: 9,
  height: 7,
  types: [
    {
      type: {
        name: 'fire'
      }
    },
    {
      type: {
        name: 'position'
      }
    }
  ]
}

export const mockDetailPokemonTwo = {
  id: 2,
  weight: 10,
  height: 8,
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
  ],
  habitat: {
    name: 'cave'
  }
}

export const mockPokemonSpeciesTwo = {
  color: {
    name: 'red'
  },
  generation: {
    name: 'generation-i'
  },
  egg_groups: [
    {
      name: 'bug'
    },
    {
      name: 'flying'
    }
  ],
  habitat: {
    name: 'grassland'
  }
}
