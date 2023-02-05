import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react-native'
import mockAxios from 'jest-mock-axios'
import ImageColors from 'react-native-image-colors'

import Home from '../src/pokemon/ui/views/Home'
import { mockLoadMocks, mockPokemonDataResponse } from '../__mocks__/pokemonList.mocks'

beforeEach(() => jest.spyOn(ImageColors, 'getColors').mockReturnValue(new Promise(jest.fn)))

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

afterEach(() => mockAxios.reset())

describe('Test Home', () => {
  test('Render okay', async () => {
    render(<Home />)

    expect(screen.getByTestId('loading')).toBeDefined()

    mockAxios.mockResponse({ data: mockPokemonDataResponse })
    await mockLoadMocks()

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'))

    expect(screen.getByPlaceholderText(/Search you pokemon/i)).toBeDefined()

    expect(screen.getAllByTestId('pokemonList')).toBeDefined()

    expect(screen.getAllByTestId('separator')).toHaveLength(2)

    expect(screen.getAllByTestId('card')).toHaveLength(3)
  })

  test('Should show empty state', async () => {
    render(<Home />)

    mockAxios.mockResponse({ data: mockPokemonDataResponse })
    await mockLoadMocks()

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'))

    fireEvent.changeText(screen.getByPlaceholderText(/Search you pokemon/i), 'pikachu')

    fireEvent.press(screen.getByTestId('searchButton'))

    expect(screen.getByText(/No results found/i)).toBeDefined()
  })

  test('Should search pokemon and close browser', async () => {
    render(<Home />)

    mockAxios.mockResponse({ data: mockPokemonDataResponse })
    await mockLoadMocks()

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'))

    fireEvent.changeText(screen.getByPlaceholderText(/Search you pokemon/i), 'bulbasaur')

    fireEvent.press(screen.getByTestId('searchButton'))

    expect(screen.getByTestId('closeButton')).toBeDefined()

    expect(screen.getAllByTestId('card')).toHaveLength(1)

    fireEvent.press(screen.getByTestId('closeButton'))

    expect(screen.getAllByTestId('card')).toHaveLength(3)
  })

  test('Should catch pokemo and remove to list', async () => {
    render(<Home />)

    mockAxios.mockResponse({ data: mockPokemonDataResponse })
    await mockLoadMocks()

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'))

    expect(screen.getAllByText('Get')).toHaveLength(3)
    expect(screen.queryByText('Delete')).toBeNull()

    fireEvent.press(screen.getAllByRole('button', { name: /get/i })[0])

    expect(screen.getByText('Delete')).toBeDefined()

    expect(screen.getAllByText('Get')).toHaveLength(1)

    fireEvent.press(screen.getByText('Delete'))

    expect(screen.getAllByText('Get')).toHaveLength(3)
  })

  test.each([
    ['7', 'Height'],
    ['10', 'Weight'],
    ['fire', 'Types'],
    ['yellow', 'Color'],
    ['cave', 'Habitat'],
    ['bug', 'Egg Groups']
  ])('Should search the pokemons with the %s value by the %s filter', async (valueSearch, typeSearch) => {
    render(<Home />)

    mockAxios.mockResponse({ data: mockPokemonDataResponse })
    await mockLoadMocks()

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'))

    fireEvent.changeText(screen.getByPlaceholderText(/Search you pokemon/i), valueSearch)

    fireEvent.press(screen.getByText(typeSearch))

    expect(screen.getAllByTestId('card')).toHaveLength(1)
  })
})
