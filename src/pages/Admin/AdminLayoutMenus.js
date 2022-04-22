import React from 'react'

import { useTranslation } from 'react-i18next'

import { Box, Typography } from '@material-ui/core'

import { TreeItem, TreeView } from '@material-ui/lab'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { useQueryMenus } from '../../api/Query/menus'

import { stylesAdminLayoutFavorites } from './styles'

export const AdminLayoutMenus = () => {
  const { t } = useTranslation()

  const classes = stylesAdminLayoutFavorites()

  const { data: menus } = useQueryMenus()

  return (
    <Box>
      <Box marginLeft={5} marginBottom={2} display="flex" justifyContent="space-between">
        <Typography>{t('Menus')}</Typography>

        <Typography>30</Typography>
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
              />
            ))}
          />
        ))}
      </TreeView>
    </Box>
  )
}
