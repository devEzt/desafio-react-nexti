import React, { lazy, Suspense, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AuthContext } from './Providers/auth'
const Auth = lazy(() => import('./pages/Auth'))

function App() {
  const { t } = useTranslation()

  const { userLogged } = useContext(AuthContext)

  const Component = useMemo(() => {
    if (!userLogged) {
      return Auth
    }

    return () => <h1>{t('First Aspect')}</h1>
  }, [userLogged, t])

  return (
    <Suspense fallback={() => <p>Loading...</p>}>
      <Component />
    </Suspense>
  )
}

export default App
