import { createAction } from '@reduxjs/toolkit'

export const apiCallBegan = createAction('apiCallBegan')
export const apiCallFailed = createAction('apiCallFailed')
export const apiCallSuccess = createAction('apiCallSuccess')
