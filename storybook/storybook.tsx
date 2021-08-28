import * as React from 'react'
import { getStorybookUI, configure } from '@storybook/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// import stories
configure(() => {
  require('./stories')
}, module)

declare module '@react-native-async-storage/async-storage' {
  export interface AsyncStorageStatic {
    getItem<T>(key: string, callback?: (error?: Error, result?: T) => void): Promise<T | null>
    setItem<T>(key: string, value: T, callback?: (error?: Error) => void): Promise<void>
  }
}

const StorybookUIRoot = getStorybookUI({
  port: 7008,
  onDeviceUI: true,
  asyncStorage: AsyncStorage,
})

const storybook: React.FC<unknown> = () => <StorybookUIRoot />

export default storybook
