import Vue from 'vue'
import Vuex from 'vuex'
import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  UPDATE_TASK_STATUS,
  SET_TASKS,
} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'title 1',
        description: 'descr 1',
        status: 'draft',
      },
      {
        id: 2,
        title: 'title 2',
        description: 'descr 2',
        status: 'active',
      },
    ],
  },
  getters: {
    getTasks: (state) => {
      return state.tasks
    },
    getMaxId: (state) => {
      let maxId = 0
      for (let task of state.tasks) {
        if (task.id > maxId) {
          maxId = task.id
        }
      }
      return maxId
    },
    getTaskById: (state) => (id) => {
      return state.tasks.find((task) => task.id === id)
    },
  },
  mutations: {
    [ADD_TASK]: (state, { title, description, id }) => {
      state.tasks.push({ title, description, id, status: 'draft' })
    },
    [DELETE_TASK]: (state, id) => {
      state.tasks.filter((task) => task.id != id)
    },
    [UPDATE_TASK]: (state, { title, description, id }) => {
      const task = state.tasks.find((task) => task.id === id)
      task.title = title
      task.description = description
    },
    [UPDATE_TASK_STATUS]: (state, { id, status }) => {
      const task = state.tasks.find((task) => task.id === id)
      task.status = status
    },
    [SET_TASKS]: (state, tasks) => {
      state.tasks = tasks
    },
  },
  actions: {},
  modules: {},
})
