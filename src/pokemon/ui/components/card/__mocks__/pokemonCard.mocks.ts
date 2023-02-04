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
  evolutionPokemon: 'ivysaur'
}

export const mockCatchPokemonController = {
  capturedPokemons: [],
  existPokemonById: jest.fn(),
  existPokemonByType: jest.fn(),
  handlePokemonsState: jest.fn(),
  existPokemonByEvolutionAndId: jest.fn()
}
