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
    shadowOffset: { width: 0, height: 2 }
  },
  Image: {
    width: 300,
    height: 300
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
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    textAlign: 'center',
    borderStyle: 'solid',
    textTransform: 'capitalize'
  },
  BoldText: {
    color: 'black',
    fontWeight: '600'
  }
})
