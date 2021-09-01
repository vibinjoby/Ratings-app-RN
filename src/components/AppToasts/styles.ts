import { StyleSheet } from 'react-native'
import Colors from '../../utilities/colors'

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  err: { borderLeftColor: Colors.red },
  animatableView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderLeftColor: Colors.green,
    borderLeftWidth: 8,
    borderRadius: 8,
    padding: 20,
    shadowColor: Colors.black,
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
