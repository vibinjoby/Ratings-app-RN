import { NativeModules } from 'react-native'

jest.mock('@react-native-community/google-signin', () => {
  const mockGoogleSignin = jest.requireActual('@react-native-community/google-signin')

  mockGoogleSignin.GoogleSignin.hasPlayServices = () => Promise.resolve(true)
  mockGoogleSignin.GoogleSignin.configure = () => Promise.resolve()
  mockGoogleSignin.GoogleSignin.currentUserAsync = () => {
    return Promise.resolve({
      name: 'name',
      email: 'test@email.com',
    })
  }

  return mockGoogleSignin
})

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

NativeModules.RNGoogleSignin = {
  BUTTON_SIZE_ICON: 0,
  BUTTON_SIZE_STANDARD: 0,
  BUTTON_SIZE_WIDE: 0,
  BUTTON_COLOR_AUTO: 0,
  BUTTON_COLOR_LIGHT: 0,
  BUTTON_COLOR_DARK: 0,
  configure: jest.fn(),
  currentUserAsync: jest.fn(),
}
