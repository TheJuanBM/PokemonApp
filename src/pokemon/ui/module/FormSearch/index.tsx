import { FlatList, Text, TouchableOpacity, View } from 'react-native'

import { FormSearchValues } from '../../../interfaces/pokemon'
import { Icons } from '../../assets'
import { InputSearch } from '../../components'
import { itemsBySearch } from '../../store'
import { useForm } from './hooks'
import { styles, stylesItem } from './styles'

export interface FormSearchProps {
  isSearching: boolean
  clearSearch: () => void
  onSearch: (values: FormSearchValues) => void
}

export function FormSearch({ ...props }: FormSearchProps) {
  const formSearch = useForm(props)

  const stylesWhitParam = styles(!formSearch.isText)

  return (
    <View style={stylesWhitParam.Container}>
      <View style={stylesWhitParam.From}>
        <InputSearch value={formSearch.values.search} onChangeText={formSearch.handleChangeText} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={stylesWhitParam.CollectionBtn}
          onPress={formSearch.onSubmit}
          disabled={!props.isSearching ? formSearch.isText : false}
        >
          {!props.isSearching ? (
            <Icons.Search testID="searchButton" width={16} />
          ) : (
            <Icons.Close testID="closeButton" width={16} />
          )}
        </TouchableOpacity>
      </View>
      {formSearch.isText ? null : (
        <FlatList
          horizontal
          data={itemsBySearch}
          keyExtractor={({ key }) => key}
          showsHorizontalScrollIndicator={false}
          style={stylesWhitParam.ListItemsToSearch}
          ItemSeparatorComponent={() => <View style={stylesWhitParam.ItemSeparatorList} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              accessibilityRole="button"
              onPress={() => formSearch.handleChangeType(item.key)}
              style={stylesItem(item.key === formSearch.values.type).ItemToSearch}
            >
              <Text style={stylesItem(item.key === formSearch.values.type).TextItemToSearch}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}
