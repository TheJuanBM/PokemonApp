import { useState } from 'react'
import { TextInput } from 'react-native'

import { styles } from './styles'

export function InputSearch() {
  const [search, setSearch] = useState('')

  return (
    <TextInput value={search} style={styles.TextInput} onChangeText={setSearch} placeholder="Search you pokemon..." />
  )
}
