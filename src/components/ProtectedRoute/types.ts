import { ReactNode } from 'react'

export interface RouteProps {
  permission: string | null
  children: ReactNode
}
