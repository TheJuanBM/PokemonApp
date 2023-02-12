import { TextInput } from 'react-native'

import { styles } from './styles'

interface InputSearchProps {
  value: string
  onChangeText: (value: string) => void
}

export function InputSearch({ value, onChangeText }: InputSearchProps) {
  return (
    <TextInput
      value={value}
      style={styles.TextInput}
      onChangeText={onChangeText}
      placeholderTextColor="#000000"
      placeholder="Search you pokemon..."
    />
  )
}
