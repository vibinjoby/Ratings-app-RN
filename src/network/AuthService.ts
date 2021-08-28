import HttpService from '../network/HttpService'
import serviceConst from '../configs/serviceConst'

export const getUserProfile = async (token: string): Promise<any> => {
  const { BASE_URL, USER_PROFILE } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.get(BASE_URL + USER_PROFILE)

  return data
}

export const fetchLoginFormDetails = async (
  email: string,
  password: string,
  typeOfUser: string,
) => {
  console.log('came here')
  const { BASE_URL, FETCH_LOGIN_API_URI } = serviceConst
  const { data } = await HttpService.post(BASE_URL + FETCH_LOGIN_API_URI, {
    email,
    password,
    typeOfUser,
  })
  console.log('data')

  return data
}

export const registerUserDetails = async (body: Record<string, unknown>) => {
  const { BASE_URL, REGISTER_API_URI } = serviceConst
  const { data } = await HttpService.post(BASE_URL + REGISTER_API_URI, body)
  return data
}
