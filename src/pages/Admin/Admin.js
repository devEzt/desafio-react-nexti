import React from 'react'

import { useTranslation } from 'react-i18next'

import { AppBar } from '../../Components/AppBar'
import { AdminLayout } from './AdminLayout'

const Admin = () => {
  return (
    <>
      <AppBar />

      <AdminLayout />
    </>
  )
}

export default Admin
