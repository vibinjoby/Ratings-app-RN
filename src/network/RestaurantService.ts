import HttpService from '../network/HttpService'
import serviceConst from '../configs/serviceConst'

export const getRestaurants = async (token: string, pageNumber: number): Promise<any> => {
  const { BASE_URL, FETCH_RESTAURANTS } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.get(BASE_URL + FETCH_RESTAURANTS + pageNumber)

  return data
}

export const createRestaurant = async (
  token: string,
  restaurantName: string,
  address: string,
  contactNumber: string,
  email: string,
): Promise<any> => {
  const { BASE_URL, CREATE_RESTAURANT } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.post(BASE_URL + CREATE_RESTAURANT, {
    restaurantName,
    address,
    contactNumber,
    email,
  })

  return data
}

export const fetchRestaurantDetail = async (token: string, restaurantId: string): Promise<any> => {
  const { BASE_URL, FETCH_RESTAURANT_DETAIL } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.get(BASE_URL + FETCH_RESTAURANT_DETAIL + restaurantId)

  return data
}

export const submitRatings = async (
  token: string,
  restaurantId: string,
  ratings: number,
  visitDate: string,
  comments: string,
): Promise<any> => {
  const { BASE_URL, SUBMIT_RATINGS } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.post(BASE_URL + SUBMIT_RATINGS, {
    restaurantId,
    ratings,
    visitDate,
    comments,
  })

  return data
}

export const submitOwnerReply = async (token: string, ownerReply: string, reviewId: string) => {
  const { BASE_URL, SUBMIT_OWNER_REPLY } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.put(BASE_URL + SUBMIT_OWNER_REPLY, {
    ownerReply,
    reviewId,
  })

  return data
}

export const fetchOwnerRestaurants = async (token: string) => {
  const { BASE_URL, fetch_OWNED_RESTAURANTS } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.get(BASE_URL + fetch_OWNED_RESTAURANTS)

  return data
}

export const fetchOwnerReviews = async (token: string) => {
  const { BASE_URL, FETCH_OWNER_REVIEWS } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.get(BASE_URL + FETCH_OWNER_REVIEWS)

  return data
}

export const fetchOwnerRestaurantReview = async (token: string, restaurantId: string) => {
  const { BASE_URL, FETCH_RESTAURANT_REVIEW } = serviceConst
  HttpService.setHeader(token)
  const { data } = await HttpService.get(BASE_URL + FETCH_RESTAURANT_REVIEW + restaurantId)

  return data
}
