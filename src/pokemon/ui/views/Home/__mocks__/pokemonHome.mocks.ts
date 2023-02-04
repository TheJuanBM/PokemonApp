import { waitFor } from '@testing-library/react-native'
import mockAxios from 'jest-mock-axios'

const mockDetailPokemon = {
  id: 1,
  weight: 9,
  height: 7,
  types: [{ type: { name: 'fire' } }, { type: { name: 'position' } }]
}

const mockDetailPokemonTwo = {
  id: 2,
  weight: 10,
  height: 8,
  types: [{ type: { name: 'grass' } }, { type: { name: 'position' } }]
}

const mockDetailPokemonThree = {
  id: 3,
  weight: 11,
  height: 14,
  types: [{ type: { name: 'normal' } }, { type: { name: 'ghost' } }]
}

const mockPokemonSpecies = {
  color: { name: 'yellow' },
  habitat: { name: 'cave' },
  generation: { name: 'generation-i' },
  egg_groups: [{ name: 'monster' }, { name: 'plant' }]
}

const mockPokemonSpeciesTwo = {
  color: { name: 'red' },
  habitat: { name: 'grassland' },
  generation: { name: 'generation-i' },
  egg_groups: [{ name: 'bug' }, { name: 'flying' }]
}

const mockPokemonSpeciesThree = {
  color: { name: 'blue' },
  habitat: { name: 'forest' },
  generation: { name: 'generation-i' },
  egg_groups: [{ name: 'plant' }, { name: 'humanshape' }]
}

const mockEvolutionPokemonResponse = {
  chain: {
    evolves_to: [{ species: { name: 'Ivysaur' } }]
  }
}

const mockEvolutionPokemonResponseTwo = {
  chain: {
    evolves_to: [{ species: { name: 'Charmeleon' } }]
  }
}

const mockEvolutionPokemonResponseThree = {
  chain: {
    evolves_to: []
  }
}

export const mockPokemonDataResponse = {
  next: 'https://pokeapi.co/api/v2/pokemon?limit=3',
  results: [
    { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'Ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    { name: 'Venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' }
  ]
}

export async function mockLoadMocks() {
  await waitFor(() => {
    mockAxios.mockResponse({ data: mockDetailPokemon })
    mockAxios.mockResponse({ data: mockDetailPokemonTwo })
    mockAxios.mockResponse({ data: mockDetailPokemonThree })
  })

  await waitFor(() => {
    mockAxios.mockResponse({ data: mockPokemonSpecies })
    mockAxios.mockResponse({ data: mockPokemonSpeciesTwo })
    mockAxios.mockResponse({ data: mockPokemonSpeciesThree })
  })

  await waitFor(() => {
    mockAxios.mockResponse({ data: mockEvolutionPokemonResponse })
    mockAxios.mockResponse({ data: mockEvolutionPokemonResponseTwo })
    mockAxios.mockResponse({ data: mockEvolutionPokemonResponseThree })
  })
}
