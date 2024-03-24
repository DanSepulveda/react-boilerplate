import { router } from '@app/router'
import { useLoginLS } from './hooks'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '@components/Layout'
import { ProtectedRoute } from '@components/ProtectedRoute'

export default function App() {
  const { token, loading } = useLoginLS()

  if (loading) {
    return null
  }

  return (
    <Routes>
      {token && !loading && (
        <Route path="/" element={<Layout />}>
          {router.map((el) => (
            <Route
              key={el.path}
              path={el.path}
              index={el.path === '/'}
              element={
                <ProtectedRoute permission={el.permission}>
                  {el.element}
                </ProtectedRoute>
              }
            />
          ))}
        </Route>
      )}
    </Routes>
  )
}
