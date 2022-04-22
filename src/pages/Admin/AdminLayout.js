import React from 'react'

import { Box, Divider } from '@material-ui/core'

import { AdminLayoutUserData } from './AdminLayoutUserData'
import { AdminLayoutMenus } from './AdminLayoutMenus'

export const AdminLayout = () => {
  return (
    <Box display="flex" flex={1}>
      <Box width={400} marginX={3} marginY={4}>
        <AdminLayoutUserData />
        <Box marginY={4}>
          <Divider />
        </Box>
        <AdminLayoutMenus />
      </Box>

      <Box display="flex" flex={1}>
        test
      </Box>
    </Box>
  )
}
