import React from 'react'

import { useTranslation } from 'react-i18next'

import { AppBar } from '../../Components/AppBar'

const Admin = () => {
  const { t } = useTranslation()

  return (
    <>
      <AppBar />

      <h1>{t('FirstAspect')}</h1>
    </>
  )
}

export default Admin
