const SET_USER= 'SET_USER'
const user = {
  state:{
    user:{}
  },
  getters:{
   
  },
  mutations:{
    [SET_USER](state, payload){
      state.user = {...payload}
    }
  },
  actions:{
    setUser({
        commit,
        }, payload) {
      commit('SET_USER', payload)
    }
  }
}
export {
  user
}