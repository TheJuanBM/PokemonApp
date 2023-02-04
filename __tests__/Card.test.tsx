import { render, screen } from '@testing-library/react-native'
import ImageColors from 'react-native-image-colors'

import { Card } from '../src/pokemon/ui/components'
import { mockCatchPokemonController, mockGetColors, mockPokemon } from '../__mocks__/pokemon.mocks'

beforeEach(() => jest.spyOn(ImageColors, 'getColors').mockReturnValue(new Promise(mockGetColors)))

describe('Test Card', () => {
  test('Render okay in android', () => {
    render(<Card pokemon={mockPokemon} catchPokemonController={mockCatchPokemonController} />)

    expect(screen.getByTestId('card')).toBeDefined()
    expect(screen.getByTestId('image')).toBeDefined()

    expect(screen.getByText(/Bulbasaur/i)).toBeDefined()

    expect(screen.getAllByTestId('typeItem')).toHaveLength(2)
    expect(screen.getByText('grassland')).toBeDefined()
  })
})
