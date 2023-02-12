import { fireEvent, render, screen } from '@testing-library/react-native'
import { ReactPortal } from 'react'

import { Detail } from '..'
import { mockPokemon } from '../__mocks__/pokemonDetail.mocks'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('react-native-maps', () => {
  const { View } = require('react-native')

  function MockMapView({ children }: ReactPortal) {
    return <View>{children}</View>
  }

  function MockMarker({ children }: ReactPortal) {
    return <View>{children}</View>
  }

  return {
    __esModule: true,
    Marker: MockMarker,
    default: MockMapView
  }
})

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

    expect(screen.getByText('Location')).toBeDefined()
    expect(screen.findByTestId('location')).toBeDefined()
  })

  test('Should close moda detail', () => {
    render(<Detail pokemon={mockPokemon} />)

    fireEvent.press(screen.getByTestId('openModalDetail'))

    expect(screen.getByText('Details')).toBeDefined()

    fireEvent.press(screen.getByTestId('closeModalDetail'))

    expect(screen.getByText('Details')).toBeDefined()
  })
})
