import React from 'react'

import { Box } from '@material-ui/core'

import { AdminLayoutTaskboardItem } from './AdminLayoutTaskboardItem'

const mock = {
  id: '5',
  name: 'Ian Chaves',
  subject: 'Aviso',
  owner: 'IC',
  users: ['FD'],
}

export const AdminLayoutTaskboard = () => {
  return (
    <Box>
      <AdminLayoutTaskboardItem {...mock} />
    </Box>
  )
}
