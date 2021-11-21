export interface RegisterProps {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  selectedTab: number
}

export interface LoginProps {
  email: string
  password: string
  selectedTab: number
}
