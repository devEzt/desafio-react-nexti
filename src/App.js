import React, { lazy, Suspense, useContext, useMemo } from 'react'
import { AuthContext } from './Providers/auth'

const Admin = lazy(() => import('./pages/Admin'))
const Auth = lazy(() => import('./pages/Auth'))

function App() {
  const { userLogged } = useContext(AuthContext)

  const Component = useMemo(() => {
    if (!userLogged) {
      return Auth
    }
    return Admin
  }, [userLogged])

  return (
    <Suspense fallback={() => <p>Loading...</p>}>
      <Component />
    </Suspense>
  )
}

export default App
