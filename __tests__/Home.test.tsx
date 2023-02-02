import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native'
import mockAxios from 'jest-mock-axios'
import ImageColors from 'react-native-image-colors'

import Home from '../src/pokemon/ui/views/Home'
import {
  mockDetailPokemon,
  mockDetailPokemonTwo,
  mockPokemonDataResponse,
  mockPokemonSpecies,
  mockPokemonSpeciesTwo
} from '../__mocks__/pokemonList.mocks'

beforeEach(() => {
  jest.spyOn(ImageColors, 'getColors').mockReturnValue(new Promise(jest.fn))
})

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

afterEach(() => mockAxios.reset())

describe('Test Home', () => {
  it('Should show pokemon list in home view', async () => {
    render(<Home />)

    expect(screen.getByTestId('loading')).toBeDefined()

    mockAxios.mockResponse({ data: mockPokemonDataResponse })

    await waitFor(() => {
      mockAxios.mockResponse({ data: mockDetailPokemon })
      mockAxios.mockResponse({ data: mockDetailPokemonTwo })
    })

    await waitFor(() => {
      mockAxios.mockResponse({ data: mockPokemonSpecies })
      mockAxios.mockResponse({ data: mockPokemonSpeciesTwo })
    })

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'))

    expect(screen.getAllByTestId('pokemonList')).toBeDefined()

    expect(screen.getByTestId('separator')).toBeDefined()

    expect(screen.getAllByTestId('card')).toHaveLength(2)
  })
})
