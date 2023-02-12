import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  ModalContainer: {
    margin: 0,
    marginLeft: 16,
    marginRight: 16,
    marginTop: '85%'
  },
  OpenModal: {
    right: 16,
    width: 50,
    height: 50,
    bottom: 16,
    borderRadius: 50,
    overflow: 'hidden',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ModalDetail: {
    flex: 1,
    paddingVertical: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white'
  },
  CloseModal: {
    zIndex: 1,
    right: 16,
    position: 'absolute'
  },
  TitlePokeBall: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center'
  },
  CardPokemon: {
    padding: 5,
    elevation: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  ImagenPokemon: {
    width: 100,
    height: 100
  },
  Separator: {
    paddingHorizontal: 8
  },
  ContentContainerStyle: {
    padding: 16
  },
  ButtonDeletePokemon: {
    top: 5,
    right: 5,
    width: 25,
    height: 25,
    elevation: 20,
    borderRadius: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.8)'
  },
  SummaryContainer: {
    marginTop: 10,
    paddingHorizontal: 16
  },
  SummaryTitle: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600'
  },
  SummaryItem: {
    marginTop: 4,
    color: '#000000'
  }
})
