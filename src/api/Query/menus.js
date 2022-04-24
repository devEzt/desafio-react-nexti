import { useQuery } from 'react-query'

import mock from '../mock.json'

export const queryMenus = ({ archivedItems = [] }) => {
  return new Promise((resolve) => {
    if (archivedItems.length) {
      setTimeout(
        () =>
          resolve(
            mock.menus.map((menu) => {
              return {
                ...menu,
                subMenus: menu.subMenus.filter((subItem) => {
                  const item = archivedItems.find((archivedItem) => archivedItem === subItem.id)

                  return !item
                }),
              }
            })
          ),
        1000
      )
    } else {
      setTimeout(() => resolve(mock.menus), 1000)
    }
  })
}

export const useQueryMenus = (config) => useQuery('menus', queryMenus, config)
export const useQueryuseQueryMenusFavorites = (queryParams, config) =>
  useQuery('menus', () => queryMenus(queryParams), config)
useQueryMenus.queryKey = 'menus'
