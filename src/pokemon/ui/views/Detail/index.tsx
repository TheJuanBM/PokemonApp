import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Modal from 'react-native-modal'
import { Bar } from 'react-native-progress'

import Pokemon from '../../../model/pokemon.model'
import { Icons } from '../../assets/svg/index'
import { styles } from './styles'

interface DetailProps {
  pokemon: Pokemon
}

export function Detail({ pokemon }: DetailProps) {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => setModalVisible(!isModalVisible)

  return (
    <View style={styles.Container}>
      <TouchableOpacity testID="openModalDetail" onPress={toggleModal}>
        <Text>Detail</Text>
      </TouchableOpacity>
      <Modal
        animationIn="bounceInUp"
        animationInTiming={800}
        isVisible={isModalVisible}
        style={styles.ModalContainer}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
      >
        <View style={styles.WrapperDetail}>
          <TouchableOpacity testID="closeModalDetail" onPress={toggleModal} style={styles.CloseModal}>
            <Icons.Close width={16} />
          </TouchableOpacity>
          <Text style={styles.Subtitle}>Details</Text>
          <Text>Name: {pokemon.name}</Text>
          <Text>Region: {pokemon.habitat}</Text>
          <Text>
            Types:{' '}
            {pokemon.types.map(type => (
              <Text key={type}>{type} </Text>
            ))}
          </Text>
          <Text>Generation: {pokemon.generation}</Text>
          <Text style={styles.Subtitle}>Statistics</Text>
          {pokemon.stats.map(item => (
            <View key={item.label}>
              <Text>
                {item.label} {item.value}
              </Text>
              <Bar progress={item.value / 100} width={200} />
            </View>
          ))}
          <Text style={styles.Total}>Total: {pokemon.stats.reduce((acc, curr) => curr.value + acc, 0)}</Text>
          <Text style={styles.Subtitle}>Location</Text>
          <MapView
            testID="location"
            zoomControlEnabled
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              longitudeDelta: 0,
              latitudeDelta: 0.009
            }}
            style={styles.MapContainer}
          >
            <Marker draggable coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
          </MapView>
        </View>
      </Modal>
    </View>
  )
}
