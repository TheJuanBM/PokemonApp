import { fireEvent, render, screen } from '@testing-library/react-native'

import { Detail } from '..'
import { mockPokemon } from '../__mocks__/pokemonDetail.mocks'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

describe('Test Detail', () => {
  test('Render okay', () => {
    render(<Detail pokemon={mockPokemon} />)

    fireEvent.press(screen.getByTestId('openModalDetail'))

    expect(screen.getByText('Details')).toBeDefined()

    expect(screen.getByText(/name: bulbasaur/i)).toBeDefined()
    expect(screen.getByText(/region: grassland/i)).toBeDefined()
    expect(screen.getByText(/types: grass position/i)).toBeDefined()
    expect(screen.getByText(/generation: generation-i/i)).toBeDefined()

    expect(screen.getByText('Statistics')).toBeDefined()

    expect(screen.getByText(/hp 10/i)).toBeDefined()
    expect(screen.getByText(/attack 15/i)).toBeDefined()
    expect(screen.getByText(/defense 50/i)).toBeDefined()
    expect(screen.getByText(/special-attack 30/i)).toBeDefined()
    expect(screen.getByText(/special-defense 40/i)).toBeDefined()
    expect(screen.getByText(/total: 165/i)).toBeDefined()
  })

  test('Should close moda detail', () => {
    render(<Detail pokemon={mockPokemon} />)

    fireEvent.press(screen.getByTestId('openModalDetail'))

    expect(screen.getByText('Details')).toBeDefined()

    fireEvent.press(screen.getByTestId('closeModalDetail'))

    expect(screen.getByText('Details')).toBeDefined()
  })
})
