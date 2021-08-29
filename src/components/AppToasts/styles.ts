import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  animatableView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderLeftColor: 'green',
    borderLeftWidth: 8,
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalViewContent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16,
    alignSelf: 'center',
    width: '60%',
    flexWrap: 'wrap',
  },
  toastImg: {
    width: 30,
    height: 30,
  },
  closeToast: {
    marginTop: 10,
    width: 12,
    height: 12,
  },
})
