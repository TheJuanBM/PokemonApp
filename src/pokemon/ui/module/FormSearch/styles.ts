import { StyleSheet } from 'react-native'

export const styles = (isText: boolean) => {
  return StyleSheet.create({
    Container: {
      flex: 1,
      height: isText ? 75 : 40
    },
    From: {
      flex: 1,
      height: 40,
      flexDirection: 'row'
    },
    CollectionBtn: {
      width: 40,
      height: 40,
      elevation: 10,
      borderTopEndRadius: 10,
      borderBottomEndRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    ListItemsToSearch: {
      marginTop: 50
    },
    ItemSeparatorList: {
      paddingHorizontal: 5
    }
  })
}

export const stylesItem = (isSelected: boolean) => {
  return StyleSheet.create({
    ItemToSearch: {
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isSelected ? 'black' : 'white'
    },
    TextItemToSearch: {
      fontWeight: '600',
      color: !isSelected ? 'black' : 'white'
    }
  })
}
