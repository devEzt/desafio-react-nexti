import React, { useContext, useEffect } from 'react'

import { Box, Divider } from '@material-ui/core'

import { useQueryTaskboard } from '../../api/Query/taskboard'

import { AdminProvider } from './AdminContext'

import { AdminLayoutTaskboardEmpty } from './AdminLayoutTaskboardEmpty'
import { AdminLayoutTaskboardItem } from './AdminLayoutTaskboardItem'
import { AdminLayoutTaskboardLoading } from './AdminLayoutTaskboardLoading'

export const AdminLayoutTaskboard = () => {
  const { taskId } = useContext(AdminProvider)

  const { data: taskboard = [], isFetching, refetch } = useQueryTaskboard({ taskId }, { enabled: false })

  useEffect(() => {
    refetch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskId])

  if (isFetching) {
    return <AdminLayoutTaskboardLoading />
  }

  if (!taskboard.length) {
    return <AdminLayoutTaskboardEmpty />
  }
  return (
    <Box>
      {taskboard.map((item) =>
        (item.subMenuItems || []).map((subMenuItem) => (
          <>
            <AdminLayoutTaskboardItem {...subMenuItem} />

            <Box my={3}>
              <Divider />
            </Box>
          </>
        ))
      )}
    </Box>
  )
}
