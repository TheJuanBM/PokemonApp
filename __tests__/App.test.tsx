import { render, screen, waitForElementToBeRemoved } from '@testing-library/react-native'
import mockAxios from 'jest-mock-axios'
import App from '../src/App'
import { mockPokemonDataResponse } from '../__mocks__/app.mocks'

afterEach(() => mockAxios.reset())

it('Test App', async () => {
  render(<App />)

  mockAxios.mockResponse({ data: mockPokemonDataResponse })

  await waitForElementToBeRemoved(() => expect(screen.getByText(/Cargando/i)))

  expect(screen.getAllByTestId('name-item')).toHaveLength(10)
})
