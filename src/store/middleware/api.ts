import { Dispatch } from 'redux'
import { AnyAction } from '@reduxjs/toolkit'
import * as Sentry from '@sentry/react-native'

import { apiCallBegan } from '../actions/api'
import { startLoader, stopLoader } from '../reducers/common/loader'
import { errorToast } from '../reducers/common/toaster'

type AsyncThunkConfig = {
  state?: unknown
  dispatch?: Dispatch
}

type ApiAction = {
  type: string
  payload: {
    apiMethod: (...args: any[]) => any
    token: string
    onSucess: Array<any>
    loader?: boolean
    args: any[]
  }
}

const api =
  ({ dispatch }: AsyncThunkConfig) =>
  (next: Dispatch<AnyAction>) =>
  async (action: ApiAction) => {
    if (!dispatch) return next(action)
    if (action.type !== apiCallBegan.type) {
      return next(action)
    }

    const { apiMethod, args, onSucess, loader } = action.payload
    try {
      /* if (loader) {
        dispatch({ type: startLoader.type })
      } */
      const response = await apiMethod(...args)
      for (const successCallback of onSucess) {
        dispatch({ type: successCallback, payload: { data: response, args } })
      }
    } catch (error) {
      Sentry.captureException(error)
      console.log(error)
      try {
        /*  dispatch({
          type: errorToast.type,
          payload: { message: JSON.parse(error)?.error },
        }) */
      } catch (err) {
        Sentry.captureException(err)
        console.log(err)
      }
    }
    /* if (loader) {
      dispatch({ type: stopLoader.type })
    } */
  }

export default api
