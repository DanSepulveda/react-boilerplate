import { Navigate } from 'react-router-dom'
import { RouteProps } from './types'

export const ProtectedRoute = ({ permission, children }: RouteProps) => {
  const permissions = ['home']

  // TODO read permissions from userSlice
  if (!permission || permissions.includes(permission)) {
    return children
  }

  return <Navigate to="/" />
}
