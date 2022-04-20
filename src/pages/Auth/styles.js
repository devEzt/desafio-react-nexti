import { makeStyles } from '@material-ui/core'

export const styles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(30),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    borderRadius: '100px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: '15px',
    borderRadius: '30px 30px',
  },
}))
