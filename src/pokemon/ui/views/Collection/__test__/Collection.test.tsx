import { fireEvent, render, screen } from '@testing-library/react-native'

import { Collection } from '..'
import { mockPokemons } from '../__mocks__/collection.mocks'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

// TODO: Implement case of removing pokemon
describe('Test Collection', () => {
  test('Render okay', () => {
    render(<Collection pokemons={mockPokemons} handleRemovePokemon={jest.fn} />)

    fireEvent.press(screen.getByTestId('openModal'))

    expect(screen.getByText(/Pokeball/i)).toBeDefined()

    expect(screen.getByTestId('modal')).toBeDefined()

    expect(screen.getAllByTestId('imagePokemon')).toHaveLength(2)

    expect(screen.getByTestId('separator')).toBeDefined()

    expect(screen.getByText('Hp: 20')).toBeDefined()
    expect(screen.getByText('Speed: 40')).toBeDefined()
    expect(screen.getByText('Attack: 30')).toBeDefined()
    expect(screen.getByText('Defense: 100')).toBeDefined()
    expect(screen.getByText('Special attack: 60')).toBeDefined()
    expect(screen.getByText('Special defense: 80')).toBeDefined()
  })
})
