import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    token: null,
    usetoken: null,
    applicationForm:false,
    jobtitle:null,
    selectedCadidate:{}
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    clearToken(state) {
      state.token = null
      localStorage.removeItem('token')
    }
  },
  actions: {
    saveToken({ commit }, token) {
      commit('setToken', token)
    },
    removeToken({ commit }) {
      commit('clearToken')
    }
  },
  getters: {
    getToken: state => {
      if (!state.token) {
        state.token = localStorage.getItem('token')
      }
      return state.token
    }
  }
})

export default store
