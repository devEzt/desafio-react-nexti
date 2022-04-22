import React from 'react'

import { useTranslation } from 'react-i18next'

import { Avatar, Box, Typography } from '@material-ui/core'

import { ArrowDropDown } from '@material-ui/icons'

import { AdminLayoutUserDataStyledBadge, stylesAdminLayoutUserData } from './styles'

export const AdminLayoutUserData = () => {
  const { t } = useTranslation()

  const classes = stylesAdminLayoutUserData()

  return (
    <Box display="flex" flex={1} alignItems="center" justifyContent="space-between">
      <AdminLayoutUserDataStyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar className={classes.avatar}>AM</Avatar>
      </AdminLayoutUserDataStyledBadge>

      <Box display="flex" marginLeft={5}>
        <Typography color="primary">{t('new').toUpperCase()}</Typography>

        <ArrowDropDown color="primary" />
      </Box>
    </Box>
  )
}
