import { useState } from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'

import Pokemon from '../../../model/pokemon.model'
import { Icons } from '../../assets'
import { styles } from './styles'
import { SummarySkills } from './SummarySkills'

export interface ModalDetailProps {
  pokemons: Pokemon[]
  handleRemovePokemon: (pokemonId: string) => void
}

export function ModalDetail({ pokemons, handleRemovePokemon }: ModalDetailProps) {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => setModalVisible(!isModalVisible)

  return (
    <View>
      <TouchableOpacity testID="openModal" style={styles.OpenModal} onPress={toggleModal}>
        <Icons.PokeBall width={50} />
      </TouchableOpacity>
      <Modal
        testID="modal"
        animationIn="bounceInUp"
        animationInTiming={800}
        isVisible={isModalVisible}
        style={styles.ModalContainer}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
      >
        <ScrollView style={styles.ModalDetail}>
          <TouchableOpacity testID="closeModal" onPress={toggleModal} style={styles.CloseModal}>
            <Icons.Close width={16} />
          </TouchableOpacity>
          <Text style={styles.TitlePokeBall}>Pokeball</Text>
          <FlatList
            horizontal
            data={pokemons}
            keyExtractor={({ id }) => id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.ContentContainerStyle}
            ItemSeparatorComponent={() => <View testID="separator" style={styles.Separator} />}
            renderItem={({ item }) => (
              <View style={styles.CardPokemon}>
                <Image testID="imagePokemon" style={styles.ImagenPokemon} source={{ uri: item.image }} />
                <TouchableOpacity
                  testID="removePokemon"
                  style={styles.ButtonDeletePokemon}
                  onPress={() => handleRemovePokemon(item.id)}
                >
                  <Icons.Delete width={10} />
                </TouchableOpacity>
              </View>
            )}
          />
          <SummarySkills pokemons={pokemons} />
        </ScrollView>
      </Modal>
    </View>
  )
}
