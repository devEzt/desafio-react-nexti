import './App.css'
import { useTranslation } from 'react-i18next'

import React, { Suspense, useMemo } from 'react'

function App() {
  const { t } = useTranslation()

  const Component = useMemo(() => {
    return () => <h1>{t('First Aspect')}</h1>
  }, [t])
  return (
    <Suspense fallback={() => <p>Loading...</p>}>
      <Component />
    </Suspense>
  )
}

export default App
