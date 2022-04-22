import { Badge, makeStyles, withStyles } from '@material-ui/core'

import { red } from '@material-ui/core/colors'

export const stylesAdminLayoutUserData = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
}))

export const AdminLayoutUserDataStyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge)
