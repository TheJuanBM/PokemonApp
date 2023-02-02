import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native'
import mockAxios from 'jest-mock-axios'
import ImageColors from 'react-native-image-colors'

import Home from '../src/pokemon/ui/views/Home'
import { mockDetailPokemon, mockPokemonDataResponse } from '../__mocks__/pokemonList.mocks'

beforeEach(() => jest.spyOn(ImageColors, 'getColors').mockReturnValue(new Promise(jest.fn)))

describe('Test Home', () => {
  it('Should show pokemon list in home view', async () => {
    render(<Home />)

    expect(screen.getByTestId('loading')).toBeDefined()

    mockAxios.mockResponse({ data: mockPokemonDataResponse })

    await waitFor(() => mockAxios.mockResponse({ data: mockDetailPokemon }))

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'))

    expect(screen.getAllByTestId('pokemonList')).toBeDefined()

    expect(screen.getAllByTestId('card')).toHaveLength(1)
  })
})
