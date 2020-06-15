import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersList: [],
    usersPerPage: 5,
    tasksList: [],
    currentPage: 1
  },
  getters: {
    getUsersList: state => () => {
      const start = (state.currentPage - 1) * state.usersPerPage
      const end = state.currentPage * state.usersPerPage
      return state.usersList.slice(start, end)
    },
    getCurrentPage: state => state.currentPage,
    getCountUsersPerPage: state => state.usersPerPage,
    getUsersCount: state => state.usersList.length,
    getUserById: state => id => {
      const user = state.usersList.find(u => u.id === id)
      if (!user) { return null }
      const userTasks = state.tasksList.filter(task => task.userId === id)
      if (userTasks && userTasks.length) {
        user.tasks = userTasks
      }
      return user
    }
  },
  mutations: {
    setUsersList: (state, list) => {
      state.usersList = [...list]
    },
    setTasksList: (state, list) => {
      state.tasksList = [...list]
    },
    setCurrentPage: (state, page) => {
      state.currentPage = page
    }
  },
  actions: {
    fetchUsers: () => {
      return fetch('https://jsonplaceholder.typicode.com/users')
    },
    writeUsersList: ({dispatch, commit}) => {
      return new Promise((resolve, reject) => {
        dispatch('fetchUsers')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            commit('setUsersList', data);
            resolve(data)
          })
          .catch(e => {
            reject(e)
          })
      })
    },
    fetchTasks: () => {
      return fetch('https://jsonplaceholder.typicode.com/todos')
    },
    writeTasksList: ({dispatch, commit}) => {
      return new Promise((resolve, reject) => {
        dispatch('fetchTasks')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            commit('setTasksList', data);
            resolve(data)
          })
          .catch(e => {
            reject(e)
          })
      })
    }
  },
  modules: {
  }
})
