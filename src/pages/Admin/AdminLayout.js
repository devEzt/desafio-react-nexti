import React, { Suspense, useMemo } from 'react'

import { AdminLayoutFilters } from './AdminLayoutFilters'
import { AdminLayoutUserData } from './AdminLayoutUserData'
import { AdminLayoutMenus } from './AdminLayoutMenus'
import { AdminLayoutTaskboard } from './AdminLayoutTaskboard'
import { AdminLayoutTaskboardLoading } from './AdminLayoutTaskboardLoading'

import { Box, CircularProgress, Divider, useTheme } from '@material-ui/core'

export const AdminLayout = () => {
  const theme = useTheme()

  const boxBorderRight = useMemo(() => {
    return `1px solid ${theme.palette.divider}`
  }, [theme.palette.divider])
  return (
    <Box display="flex" flex={1} minHeight="calc(100vh - 64px)">
      <Box width={400} paddingX={3} paddingY={4} borderRight={boxBorderRight}>
        <AdminLayoutUserData />
        <Box marginY={4}>
          <Divider />
        </Box>
        <Suspense fallback={<CircularProgress />}>
          <AdminLayoutMenus />
        </Suspense>
      </Box>

      <Box display="flex" flexDirection="column" flex={1} margin={3}>
        <Box marginBottom={5}>
          <AdminLayoutFilters />
        </Box>
        <Suspense fallback={<AdminLayoutTaskboardLoading />}>
          <AdminLayoutTaskboard />
        </Suspense>
      </Box>
    </Box>
  )
}
