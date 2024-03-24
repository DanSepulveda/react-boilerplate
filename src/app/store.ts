import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@redux/user'

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
