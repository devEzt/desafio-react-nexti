import React, { useContext, useEffect, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { Box, Typography } from '@material-ui/core'

import { TreeItem, TreeView } from '@material-ui/lab'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { useQueryMenus } from '../../api/Query/menus'
import { AdminProvider } from './AdminContext'

import { stylesAdminLayoutFavorites } from './styles'

export const AdminLayoutMenus = () => {
  const { subtaskArchived: archivedItems, setTaskId } = useContext(AdminProvider)

  const { t } = useTranslation()

  const classes = stylesAdminLayoutFavorites()

  const { data: menus = [], refetch } = useQueryMenus({ archivedItems }, { enabled: false })

  useEffect(() => {
    refetch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [archivedItems])

  const countMenus = useMemo(() => {
    if (menus.length) {
      return 30
    }

    return 0
  }, [menus])

  return (
    <Box>
      <Box marginLeft={5} marginBottom={2} display="flex" justifyContent="space-between">
        <Typography>{t('Menus')}</Typography>

        <Typography>{countMenus}</Typography>
      </Box>

      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {menus.map((menu) => (
          <TreeItem
            nodeId={menu.id}
            label={
              <Box display="flex" justifyContent="space-between" paddingY={1} marginLeft={5}>
                <Typography>{menu.name}</Typography>

                <Typography>15</Typography>
              </Box>
            }
            children={menu.subMenus.map((subMenu) => (
              <TreeItem
                nodeId={subMenu.id}
                label={
                  <Box display="flex" justifyContent="space-between" paddingY={1} marginLeft={5}>
                    <Typography>{subMenu.name}</Typography>

                    <Typography>15</Typography>
                  </Box>
                }
                onClick={() => setTaskId(subMenu.id)}
              />
            ))}
          />
        ))}
      </TreeView>
    </Box>
  )
}
