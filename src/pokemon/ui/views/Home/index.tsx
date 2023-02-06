import { FlatList, SafeAreaView, Text, View } from 'react-native'

import { Card, Loading } from '../../components'
import { usePokemonController } from '../../hooks'
import { FormSearch } from '../../module'
import { Collection } from '../Collection'
import { StylesHome } from './styles'

export default function Home() {
  const pokemonController = usePokemonController()

  return (
    <SafeAreaView style={StylesHome.Wrapper}>
      <View style={StylesHome.ContainerHeaderList}>
        <FormSearch
          onSearch={pokemonController.searchPokemon}
          clearSearch={pokemonController.clearSearch}
          isSearching={pokemonController.isSearching}
        />
      </View>
      <FlatList
        testID="pokemonList"
        onEndReachedThreshold={0.4}
        keyExtractor={({ id }) => id}
        data={pokemonController.pokemons}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={StylesHome.ContentContainerStyle}
        ListFooterComponent={!pokemonController.isLoading ? null : <Loading />}
        onEndReached={!pokemonController.isSearching ? pokemonController.getPokemons : null}
        ItemSeparatorComponent={() => <View testID="separator" style={StylesHome.ItemSeparatorComponent} />}
        renderItem={({ item }) => (
          <Card pokemon={item} catchPokemonController={pokemonController.catchPokemonController} />
        )}
        ListEmptyComponent={() =>
          pokemonController.isLoading ? null : <Text style={StylesHome.TextNoFound}>No results found</Text>
        }
      />
      {!!pokemonController.catchPokemonController.capturedPokemons.length && (
        <Collection
          pokemons={pokemonController.catchPokemonController.capturedPokemons}
          handleRemovePokemon={pokemonController.catchPokemonController.handleRemovePokemon}
        />
      )}
    </SafeAreaView>
  )
}
