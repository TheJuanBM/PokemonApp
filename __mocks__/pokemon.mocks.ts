import { ImageColorsResult } from 'react-native-image-colors/lib/typescript/types'

export const mockGetColors = (): Promise<ImageColorsResult> => {
  return new Promise(res => {
    res({ platform: 'android' })
  })
}

export const mockPokemon = {
  id: '1',
  color: 'red',
  name: 'Bulbasaur',
  image: 'image.png',
  habitat: 'grassland',
  generation: 'generation-i',
  types: ['grass', 'position'],
  eggGroups: ['monster', 'plant'],
  height: 5,
  weight: 17,
  evolutionPokemon: 'ivysaur',
  stats: [
    { label: 'hp', value: 10 },
    { label: 'speed', value: 20 },
    { label: 'attack', value: 15 },
    { label: 'defense', value: 50 },
    { label: 'special-attack', value: 30 },
    { label: 'special-defense', value: 40 }
  ]
}

export const mockCatchPokemonController = {
  capturedPokemons: [],
  existPokemonById: jest.fn(),
  existPokemonByType: jest.fn(),
  handleRemovePokemon: jest.fn(),
  handlePokemonsState: jest.fn(),
  existPokemonByEvolutionAndId: jest.fn()
}
