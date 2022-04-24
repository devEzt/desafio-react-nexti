import { useQuery } from 'react-query'

import mock from '../mock.json'

export const queryTaskboard = ({ taskId }) => {
  return new Promise((resolve) => {
    if (taskId) {
      setTimeout(() => resolve(mock.taskboard.filter((task) => task.id === taskId)), 1000)
    } else {
      setTimeout(() => resolve([]), 1000)
    }
  })
}

export const useQueryTaskboard = (queryParams, config) => {
  return useQuery('taskboard', () => queryTaskboard(queryParams), config)
}

useQueryTaskboard.queryKey = 'taskboard'
