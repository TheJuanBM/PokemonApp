import { FlatList, SafeAreaView, Text } from 'react-native'
import { usePokemonController } from './hooks'

export default function App() {
  const pokemonController = usePokemonController()

  if (pokemonController.isLoading) return <Text>Cargando</Text>

  return (
    <SafeAreaView>
      <FlatList
        data={pokemonController.data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Text testID="name-item">{item.name}</Text>}
      />
    </SafeAreaView>
  )
}
