import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  Container: {
    top: 16,
    right: 16,
    position: 'absolute'
  },
  ModalContainer: {
    margin: 16,
    marginBottom: 0
  },
  CloseModal: {
    top: 16,
    zIndex: 1,
    right: 16,
    position: 'absolute'
  },
  WrapperDetail: {
    flex: 1,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white'
  },
  Subtitle: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 3,
    color: 'black',
    fontWeight: '600'
  },
  Total: {
    marginTop: 7,
    fontWeight: '500'
  },
  MapContainer: {
    flex: 1
  }
})
