import { Image, ScrollView, Text, View } from 'react-native'

import Pokemon from '../../../model/pokemon.model'
import { useGetDetailController } from './hooks'
import { styles } from './styles'

interface CardProps {
  pokemon: Pokemon
}

export function Card({ pokemon }: CardProps) {
  const { bgColor } = useGetDetailController(pokemon.image)

  return (
    <View testID="card" style={{ ...styles.ContainerCard, backgroundColor: bgColor }}>
      <Image testID="image" style={styles.Image} source={{ uri: pokemon.image }} />
      <View style={styles.BottomSection}>
        <Text style={styles.Name}>{pokemon.name}</Text>
        <View style={styles.TypesContainer}>
          <Text style={styles.BoldText}>Tipo: </Text>
          {pokemon.types.map(type => (
            <Text testID="typeItem" style={styles.TypesText} key={type}>
              {type}
            </Text>
          ))}
        </View>
        <View style={styles.TypesContainer}>
          <Text style={styles.BoldText}>Habilidad: </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {pokemon.abilities.map(abilitie => (
              <Text testID="abilitiItem" style={styles.TypesText} key={abilitie}>
                {abilitie}
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
