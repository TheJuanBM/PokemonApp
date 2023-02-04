import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import Pokemon from '../../../model/pokemon.model'
import { CatchPokemonController } from '../../hooks'
import { useDetailController } from './hooks'
import { styles } from './styles'

interface CardProps {
  pokemon: Pokemon
  catchPokemonController: CatchPokemonController
}

export function Card({ pokemon, catchPokemonController }: CardProps) {
  const detailController = useDetailController(pokemon.image)

  const { existPokemonById, handlePokemonsState, existPokemonByEvolutionAndId, existPokemonByType } =
    catchPokemonController

  return (
    <LinearGradient testID="card" colors={detailController.colors} style={{ ...styles.ContainerCard }}>
      <Image testID="image" style={styles.Image} source={{ uri: pokemon.image }} />
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => handlePokemonsState(pokemon)}
        disabled={!existPokemonById(pokemon.id) && existPokemonByEvolutionAndId(pokemon)}
      >
        {existPokemonById(pokemon.id) ? (
          <Text>Delete</Text>
        ) : !existPokemonByEvolutionAndId(pokemon) && !existPokemonByType(pokemon) ? (
          <Text>Get</Text>
        ) : null}
      </TouchableOpacity>
      <View style={styles.BottomSection}>
        <Text style={styles.Name} numberOfLines={1}>
          {pokemon.name}
        </Text>
        <View style={styles.TypesContainer}>
          <Text style={styles.BoldText}>Type: </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {pokemon.types.map(type => (
              <Text testID="typeItem" style={styles.TypesText} key={type}>
                {type}
              </Text>
            ))}
          </ScrollView>
        </View>
        <View style={styles.TypesContainer}>
          <Text style={styles.BoldText}>Habitat: </Text>
          <Text testID="habitatItem" style={styles.TypesText}>
            {pokemon.habitat}
          </Text>
        </View>
        <Text style={styles.BoldText}>{`\n~ ${pokemon.generation} ~`}</Text>
      </View>
    </LinearGradient>
  )
}
