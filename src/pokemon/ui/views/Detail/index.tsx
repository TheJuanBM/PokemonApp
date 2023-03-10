import { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
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
      <TouchableOpacity style={styles.DetailBtn} testID="openModalDetail" onPress={toggleModal}>
        <Text style={styles.TextDetail}>Detail</Text>
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity testID="closeModalDetail" onPress={toggleModal} style={styles.CloseModal}>
              <Icons.Close width={16} />
            </TouchableOpacity>
            <Text style={styles.Subtitle}>Details</Text>
            <Text style={styles.TextDetail}>Name: {pokemon.name}</Text>
            <Text style={styles.TextDetail}>Region: {pokemon.habitat}</Text>
            <Text style={styles.TextDetail}>
              Types:{' '}
              {pokemon.types.map(type => (
                <Text key={type}>{type} </Text>
              ))}
            </Text>
            <Text style={styles.TextDetail}>Generation: {pokemon.generation}</Text>
            <View style={styles.Separator} />
            <Text style={styles.Subtitle}>Statistics</Text>
            {pokemon.stats.map(item => (
              <View key={item.label}>
                <Text style={styles.TextDetail}>
                  {item.label} {item.value}
                </Text>
                <Bar progress={item.value / 100} width={200} />
              </View>
            ))}
            <Text style={styles.Total}>Total: {pokemon.stats.reduce((acc, curr) => curr.value + acc, 0)}</Text>
            <View style={styles.Separator} />
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
              provider={PROVIDER_GOOGLE}
              style={styles.MapContainer}
            >
              <Marker draggable coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
            </MapView>
          </ScrollView>
        </View>
      </Modal>
    </View>
  )
}
