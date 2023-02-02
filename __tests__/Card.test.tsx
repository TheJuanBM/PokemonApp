import { render, screen } from '@testing-library/react-native'
import React from 'react'
import ImageColors from 'react-native-image-colors'

import { Card } from '../src/pokemon/ui/components'
import { mockPokemon } from '../__mocks__/pokemon.mock'

beforeEach(() => jest.spyOn(ImageColors, 'getColors').mockReturnValue(new Promise(jest.fn)))

describe('Test Card', () => {
  it('Render okay', () => {
    render(<Card pokemon={mockPokemon} />)

    expect(screen.getByTestId('card')).toBeDefined()
    expect(screen.getByTestId('image')).toBeDefined()

    expect(screen.getByText(/Bulbasaur/i)).toBeDefined()

    expect(screen.getAllByTestId('typeItem')).toHaveLength(2)
    expect(screen.getAllByTestId('abilitiItem')).toHaveLength(2)
  })
})
