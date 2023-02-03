import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native'
import mockAxios from 'jest-mock-axios'
import ImageColors from 'react-native-image-colors'

import Home from '..'
import {
  mockDetailPokemon,
  mockDetailPokemonTwo,
  mockPokemonDataResponse,
  mockPokemonSpecies,
  mockPokemonSpeciesTwo
} from '../__mocks__/pokemonHome.mocks'

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

    expect(screen.getByPlaceholderText(/Search you pokemon/i)).toBeDefined()

    expect(screen.getAllByTestId('pokemonList')).toBeDefined()

    expect(screen.getByTestId('separator')).toBeDefined()

    expect(screen.getAllByTestId('card')).toHaveLength(2)
  })

  it('Should search pokemon and close browser', async () => {
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

    fireEvent.changeText(screen.getByPlaceholderText(/Search you pokemon/i), 'bulbasaur')

    fireEvent.press(screen.getByTestId('searchButton'))

    expect(screen.getByTestId('closeButton')).toBeDefined()

    expect(screen.getAllByTestId('card')).toHaveLength(1)

    fireEvent.press(screen.getByTestId('closeButton'))

    expect(screen.getAllByTestId('card')).toHaveLength(2)
  })

  test('Should show empty state', async () => {
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

    fireEvent.changeText(screen.getByPlaceholderText(/Search you pokemon/i), 'pikachu')

    fireEvent.press(screen.getByTestId('searchButton'))

    expect(screen.getByText(/No results found/i)).toBeDefined()
  })

  test.each([
    ['bug', 'Egg Groups'],
    ['cave', 'Habitat'],
    ['yellow', 'Color'],
    ['fire', 'Types'],
    ['10', 'Weight'],
    ['7', 'Height']
  ])('Should search pokemon by %s whit %s', async (valueSearch, typeSearch) => {
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

    fireEvent.changeText(screen.getByPlaceholderText(/Search you pokemon/i), valueSearch)

    fireEvent.press(screen.getByText(typeSearch))

    expect(screen.getAllByTestId('card')).toHaveLength(1)
  })
})
