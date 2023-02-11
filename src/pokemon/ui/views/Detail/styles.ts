import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  Container: {
    top: 16,
    right: 16,
    position: 'absolute'
  },
  DetailBtn: {
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  ModalContainer: {
    margin: 16,
    marginBottom: 0,
    justifyContent: 'flex-end'
  },
  CloseModal: {
    top: 0,
    right: 0,
    zIndex: 1,
    position: 'absolute'
  },
  WrapperDetail: {
    height: '90%',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white'
  },
  Subtitle: {
    fontSize: 15,
    marginBottom: 3,
    color: 'black',
    fontWeight: '600'
  },
  Total: {
    marginTop: 7,
    fontWeight: '500'
  },
  MapContainer: {
    flex: 1,
    minHeight: 200
  },
  Separator: {
    paddingVertical: 10
  }
})
