import { createStore, Module } from 'vuex'

const auth:Module<any, any> = {
  namespaced: true,
  state: () => ({
    user: undefined,
    init: false
  }),
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setInit (state, payload) {
      state.init = payload
    }
  },
  actions: {
    async init ({ dispatch, commit, getters, state }) {
      if (state.init) { return }
      if (getters.isLoggedIn) { return }
      try {
        commit('setInit', true)
        const token = localStorage.getItem('token')
        if (token) {
          await new Promise(resolve => setTimeout(resolve, 200)) // check if token valid
          await dispatch('fetchUser')
        }
      } catch (error) {

      }
    },

    async login ({ dispatch, getters }, payload) {
      if (getters.isLoggedIn) { return }
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)) // get token
        localStorage.setItem('token', 'mock-token')
        await dispatch('fetchUser')

        return true
      } catch (error) {

      }
    },
    async fetchUser ({ commit }) {
      try {
        const token = localStorage.getItem('token')
        await new Promise(resolve => setTimeout(resolve, 500)) // fetch user
        const user = {
          name: 'Ozan',
          surname: 'Çakır'
        }
        commit('setUser', user)
      } catch (error) {

      }
    },
    async logout ({ commit }) {
      await new Promise(resolve => setTimeout(resolve, 100)) // inform server about logout
      localStorage.removeItem('token')
      commit('setUser', null)
      commit('setInit', false)
      return true
    }
  },
  getters: {
    isLoggedIn (state) {
      return !!state.user
    }
  }
}

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: auth
  }
})
