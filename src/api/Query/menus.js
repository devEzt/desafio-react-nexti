import { useQuery } from 'react-query'

import mock from '../mock.json'

export const queryMenus = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mock.menus), 1000)
  })
}

export const useQueryMenus = (config) => useQuery('menus', queryMenus, config)
useQueryMenus.queryKey = 'menus'
