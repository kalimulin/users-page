import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersList: []
  },
  getters: {
    getUsersList: state => (start = 0, number = 5) => state.usersList.slice(start, start + number)
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
