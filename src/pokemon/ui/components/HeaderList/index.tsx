import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Icons } from '../../assets'
import { InputSearch } from '../InputSearch'
import { styles } from './styles'

export function HeaderList() {
  return (
    <View style={styles.ContainerHeaderList}>
      <InputSearch />
      <View style={styles.Separator} />
      <TouchableOpacity activeOpacity={0.7} style={styles.CollectionBtn}>
        <Icons.Collection width={16} />
      </TouchableOpacity>
    </View>
  )
}
