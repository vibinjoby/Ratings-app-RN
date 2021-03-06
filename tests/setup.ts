import { NativeModules } from 'react-native'

const mockedNavigate = jest.fn()

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
      setOptions: mockedNavigate,
    }),
    useRoute: () => ({
      params: {},
    }),
  }
})

// Mock for react-native-device-info
jest.mock('@react-native-community/netinfo', () => {
  return {
    addEventListener: jest.fn(() => Promise.resolve('1.0')),
    getApplicationName: jest.fn(() => Promise.resolve('My App')),
  }
})

jest.mock('@react-native-community/async-storage', () => ({
  AsyncStorage: {
    setItem: jest.fn(() => {
      return new Promise((resolve) => {
        resolve(null)
      })
    }),
    multiSet: jest.fn(() => {
      return new Promise((resolve) => {
        resolve(null)
      })
    }),
    getItem: jest.fn(() => {
      return new Promise((resolve) => {
        resolve(JSON.stringify(''))
      })
    }),
    multiGet: jest.fn(() => {
      return new Promise((resolve) => {
        resolve('')
      })
    }),
    removeItem: jest.fn(() => {
      return new Promise((resolve) => {
        resolve(null)
      })
    }),
    getAllKeys: jest.fn(() => {
      return new Promise((resolve) => {
        resolve(['one', 'two', 'three'])
      })
    }),
  },
}))
