import { useState } from 'react'
import { TextInput } from 'react-native'

import { styles } from './styles'

interface InputSearchProps {
  value: string
  onChangeText: (value: string) => void
}

export function InputSearch({ value, onChangeText }: InputSearchProps) {
  return (
    <TextInput value={value} style={styles.TextInput} onChangeText={onChangeText} placeholder="Search you pokemon..." />
  )
}
