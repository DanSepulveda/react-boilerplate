import { createSlice } from '@reduxjs/toolkit'
import type { State } from 'src/app/store'
import type { UserState, IncrementAction } from './types'

const INITIAL_STATE: UserState = {
    value: 0,
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        increment: (state, action: IncrementAction) => {
            state.value += action.payload
        },
    },
})

export const { increment } = userSlice.actions

export const userState = (state: State) => state.user

export const userReducer = userSlice.reducer
