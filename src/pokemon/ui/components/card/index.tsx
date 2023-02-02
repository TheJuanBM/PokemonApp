import { Image, ScrollView, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import Pokemon from '../../../model/pokemon.model'
import { useGetDetailController } from './hooks'
import { styles } from './styles'

interface CardProps {
  pokemon: Pokemon
}

export function Card({ pokemon }: CardProps) {
  const { bgColor } = useGetDetailController(pokemon.image)

  return (
    <LinearGradient testID="card" colors={[bgColor.dark, bgColor.light, 'white']} style={{ ...styles.ContainerCard }}>
      <Image testID="image" style={styles.Image} source={{ uri: pokemon.image }} />
      <View style={styles.BottomSection}>
        <Text style={styles.Name} numberOfLines={1}>
          {pokemon.name}
        </Text>
        <View style={styles.TypesContainer}>
          <Text style={styles.BoldText}>Type: </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {pokemon.types.map(type => (
              <Text testID="typeItem" style={styles.TypesText} key={type}>
                {type}
              </Text>
            ))}
          </ScrollView>
        </View>
        <View style={styles.TypesContainer}>
          <Text style={styles.BoldText}>Ability: </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {pokemon.abilities.map(abilitie => (
              <Text testID="abilitiItem" style={styles.TypesText} key={abilitie}>
                {abilitie}
              </Text>
            ))}
          </ScrollView>
        </View>
        <Text style={styles.BoldText}>{`\n~ ${pokemon.generation} ~`}</Text>
      </View>
    </LinearGradient>
  )
}
