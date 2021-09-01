import HttpService from '../network/HttpService'
import serviceConst from '../configs/serviceConst'

export const authenticateAdmin = async (username: string, password: string): Promise<any> => {
  const { BASE_URL, LOGIN_ADMIN } = serviceConst
  const { data } = await HttpService.post(BASE_URL + LOGIN_ADMIN, { username, password })

  return data
}

export const fetchAllUsers = async (token: string): Promise<any> => {
  const { BASE_URL, FETCH_ALL_USERS } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.get(BASE_URL + FETCH_ALL_USERS)

  return data
}

export const fetchAllRestaurants = async (token: string): Promise<any> => {
  const { BASE_URL, FETCH_ALL_RESTAURANTS } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.get(BASE_URL + FETCH_ALL_RESTAURANTS)

  return data
}

export const fetchAllReviews = async (token: string): Promise<any> => {
  const { BASE_URL, FETCH_ALL_REVIEWS } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.get(BASE_URL + FETCH_ALL_REVIEWS)

  return data
}

export const deleteUser = async (token: string, userId: string): Promise<any> => {
  const { BASE_URL, DELETE_USER } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.delete(BASE_URL + DELETE_USER + userId)

  return data
}

export const deleteReview = async (token: string, reviewId: string): Promise<any> => {
  const { BASE_URL, DELETE_REVIEW } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.delete(BASE_URL + DELETE_REVIEW + reviewId)

  return data
}

export const deleteRestaurant = async (token: string, restaurantId: string): Promise<any> => {
  const { BASE_URL, DELETE_RESTAURANT } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.delete(BASE_URL + DELETE_RESTAURANT + restaurantId)

  return data
}
