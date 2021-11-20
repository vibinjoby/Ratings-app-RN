import { UserType } from '../../../__generated__/globalTypes'

export const determineUserTypeByTabSelection = (selectedTab: number) => {
  switch (selectedTab) {
    case 0:
      return UserType.customer
    case 1:
      return UserType.owner
    default:
      return UserType.admin
  }
}
