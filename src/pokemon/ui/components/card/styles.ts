import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  ContainerCard: {
    display: 'flex',
    shadowColor: 'black',
    borderStyle: 'solid',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    elevation: 10,
    borderRadius: 10,
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  Image: {
    width: 300,
    height: 300
  },
  CatchPokemon: {
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  BottomSection: {
    flex: 1,
    padding: 16,
    width: '100%'
  },
  Name: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    textTransform: 'capitalize'
  },
  TypesContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  TypesText: {
    fontSize: 12,
    marginRight: 5,
    borderRadius: 50,
    paddingVertical: 3,
    paddingHorizontal: 10,
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(0, 0, 0, 0.07)'
  },
  BoldText: {
    color: 'black',
    fontWeight: '600',
    textTransform: 'capitalize'
  }
})
