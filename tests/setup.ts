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
    }),
    useRoute: () => ({
      params: {},
    }),
  }
})

jest.mock('@react-native-async-storage/async-storage', () => ({
  AsyncStorage: {
    setItem: jest.fn(() => {
      return new Promise((resolve, reject) => {
        resolve(null)
      })
    }),
    multiSet: jest.fn(() => {
      return new Promise((resolve, reject) => {
        resolve(null)
      })
    }),
    getItem: jest.fn(() => {
      return new Promise((resolve, reject) => {
        resolve(JSON.stringify(''))
      })
    }),
    multiGet: jest.fn(() => {
      return new Promise((resolve, reject) => {
        resolve('')
      })
    }),
    removeItem: jest.fn(() => {
      return new Promise((resolve, reject) => {
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
