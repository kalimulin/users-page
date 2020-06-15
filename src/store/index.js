import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersList: [],
    usersPerPage: 5
  },
  getters: {
    getUsersList: state => (page = 1) => {
      const start = (page - 1) * state.usersPerPage
      const end = page * state.usersPerPage
      console.log(start, end)
      return state.usersList.slice(start, end)
    },
    getCountUsersPerPage: state => state.usersPerPage,
    getUsersCount: state => state.usersList.length
  },
  mutations: {
    setUsersList: (state, list) => {
      state.usersList = [...list]
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
    }
  },
  modules: {
  }
})
