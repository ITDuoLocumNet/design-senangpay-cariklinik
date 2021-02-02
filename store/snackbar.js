export const state = () => ({
  show: false,
  message: '',
  color: '',
  timeout: '3000',
})

export const mutations = {
  snackbar(state, payload) {
    state.show = payload.show
    state.message = payload.message
    state.color = payload.color
    state.timeout = payload.timeout
  },
}

export const actions = {
  snackbar({ commit }, payload) {
    commit('snackbar', payload)
  },
}
