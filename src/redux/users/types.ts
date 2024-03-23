import type { PayloadAction } from '@reduxjs/toolkit/react'

export interface UserState {
    value: number
}

export type IncrementAction = PayloadAction<number>
