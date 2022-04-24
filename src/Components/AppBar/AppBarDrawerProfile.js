import React from 'react'

import { useTranslation } from 'react-i18next'

import { Avatar, Box, Button } from '@material-ui/core'

import { stylesDrawerAvatar } from './styles'

export const AppBarDrawerProfile = () => {
  const { t } = useTranslation()

  const classes = stylesDrawerAvatar()

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginY={5}>
      <Box marginBottom={2}>
        <Avatar className={classes.avatar}>AM</Avatar>
      </Box>

      <Box fontSize={18} fontWeight="fontWeightBold" marginBottom={6}>
        Alexandre H. Antunes Maciel
      </Box>

      <Box width={1} paddingX={2}>
        <Button variant="contained" color="primary" fullWidth onClick={console.log}>
          {t('myProfile')}
        </Button>
      </Box>
    </Box>
  )
}
