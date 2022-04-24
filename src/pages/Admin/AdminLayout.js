import React from 'react'

import { AdminLayoutFilters } from './AdminLayoutFilters'
import { AdminLayoutUserData } from './AdminLayoutUserData'
import { AdminLayoutMenus } from './AdminLayoutMenus'

import { Box, Divider } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const AdminLayout = () => {
  return (
    <Box display="flex" flex={1} minHeight="calc(100vh - 64px)">
      <Box width={400} paddingX={3} paddingY={4} borderRight={`1px solid ${grey[400]}`}>
        <AdminLayoutUserData />
        <Box marginY={4}>
          <Divider />
        </Box>
        <AdminLayoutMenus />
      </Box>

      <Box display="flex" flex={1} margin={3}>
        <AdminLayoutFilters />
      </Box>
    </Box>
  )
}
