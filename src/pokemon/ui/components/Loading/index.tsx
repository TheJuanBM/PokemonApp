import Lottie from 'lottie-react-native'
import { ReactNode } from 'react'
import { ActivityIndicator, View } from 'react-native'

import { styles } from './styles'

interface LoadingProps {
  children?: ReactNode
}

export function Loading({ children }: LoadingProps) {
  return (
    <View style={styles.ContainerLoading}>
      <Lottie
        loop
        autoPlay
        testID="loading"
        style={styles.Loading}
        source={require('../../assets/pokeballLoading.json')}
      />
      <ActivityIndicator style={styles.ActivityIndicator} />
      {children}
    </View>
  )
}
