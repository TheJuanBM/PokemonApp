import { render, screen } from '@testing-library/react-native'
import ImageColors from 'react-native-image-colors'

import { Card } from '..'
import { mockGetColors, mockPokemonCard } from '../__mocks__/pokemonCard.mocks'

beforeEach(() => jest.spyOn(ImageColors, 'getColors').mockReturnValue(new Promise(mockGetColors)))

describe('Test Card', () => {
  it('Render okay in android', () => {
    render(<Card pokemon={mockPokemonCard} />)

    expect(screen.getByTestId('card')).toBeDefined()
    expect(screen.getByTestId('image')).toBeDefined()

    expect(screen.getByText(/Bulbasaur/i)).toBeDefined()

    expect(screen.getAllByTestId('typeItem')).toHaveLength(2)
    expect(screen.getByText('grassland')).toBeDefined()
  })
})
