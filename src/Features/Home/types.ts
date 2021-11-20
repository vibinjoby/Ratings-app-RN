import { ImageSourcePropType } from 'react-native'

export type ContentType = {
  title: string
  img: ImageSourcePropType
  subHead: string
  onPress: () => void
}

export interface HomeViewProps {
  isLogoutPopupVisible: boolean
  onLogout: () => void
  onNegativeModalPress: () => void
}

export interface HomeRouteProps {
  key: string
  name: string
  params: {
    initialRoute: string
  }
}
