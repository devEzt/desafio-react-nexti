import moment from 'moment'

import { getCapitalize } from './string'

export const formatDate = (dateTime) => {
  if (moment(dateTime).isValid) {
    if (moment(dateTime).isSame(moment(), 'day')) {
      return moment(dateTime).format('dddd, HH:mm')
    }

    return getCapitalize(moment(dateTime).format('dddd, HH:mm'))
  }

  return '-'
}
