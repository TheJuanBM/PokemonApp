import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native'

import { Card } from '../../components'
import { usePokemonController } from '../../hooks'
import { StylesHome } from './styles'

export default function Home() {
  const pokemonController = usePokemonController()

  return (
    <SafeAreaView>
      <FlatList
        testID="pokemonList"
        onEndReachedThreshold={0.4}
        keyExtractor={({ id }) => id}
        data={pokemonController.pokemons}
        showsVerticalScrollIndicator={false}
        onEndReached={pokemonController.getPokemons}
        renderItem={({ item }) => <Card pokemon={item} />}
        contentContainerStyle={StylesHome.ContentContainerStyle}
        ItemSeparatorComponent={() => <View testID="separator" style={StylesHome.ItemSeparatorComponent} />}
        ListFooterComponent={
          !pokemonController.isLoading ? null : (
            <ActivityIndicator testID="loading" style={StylesHome.ActivityIndicator} size={20} color="grey" />
          )
        }
      />
    </SafeAreaView>
  )
}
