import React from 'react'
import { Box } from '@material-ui/core'

import { AppBar } from '../../Components/AppBar'

import { AdminContext } from './AdminContext'
import { AdminLayout } from './AdminLayout'

const Admin = () => {
  return (
    <>
      <AdminContext>
        <AppBar />

        <Box marginTop={9}>
          <AdminLayout />
        </Box>
      </AdminContext>
    </>
  )
}

export default Admin
