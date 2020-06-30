export const generateState = () => () => ({
    items: [],
    isLoading: false,
    validUser: {
        login: "TEST",
        password: "TEST"
    }
  })
  
  export const generateActions = service => ({
    async fetch({ commit, state }, { options }) {
      commit("fetchStart")
      console.log("FETCH LOG")
      console.log(options)
      commit("add", options)
      commit("fetchEnd")
    },
  })
  
  export const generateMutations = () => ({
    add(state, options) {
      // const item = {
      //   ...options
      // } 
      state.items.push(options)
    },
    check(state, options) {},
    delete(state, options) {},
    fetchStart(state) {
      state.isLoading = true
    },
    fetchEnd(state) {
      state.isLoading = false
    }
  })
  
  export default {
    generateState,
    generateActions,
    generateMutations
  }
  