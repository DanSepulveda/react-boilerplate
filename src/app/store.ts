import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@redux/users'

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
