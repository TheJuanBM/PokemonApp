import { FlatList, SafeAreaView, View } from 'react-native'

import { Card, HeaderList, Loading } from '../../components'
import { usePokemonController } from '../../hooks'
import { StylesHome } from './styles'

export default function Home() {
  const pokemonController = usePokemonController()

  return (
    <SafeAreaView style={StylesHome.Wrapper}>
      <HeaderList />
      <FlatList
        testID="pokemonList"
        onEndReachedThreshold={0.4}
        keyExtractor={({ id }) => id}
        data={pokemonController.pokemons}
        showsVerticalScrollIndicator={false}
        onEndReached={pokemonController.getPokemons}
        renderItem={({ item }) => <Card pokemon={item} />}
        contentContainerStyle={StylesHome.ContentContainerStyle}
        ListFooterComponent={!pokemonController.isLoading ? null : <Loading />}
        ItemSeparatorComponent={() => <View testID="separator" style={StylesHome.ItemSeparatorComponent} />}
      />
    </SafeAreaView>
  )
}
