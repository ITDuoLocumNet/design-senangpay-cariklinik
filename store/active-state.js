export const state = () => ({
  activeKey: 'ms',
  activePage: '/',
})

export const mutations = {
  activeKey(state, payload) {
    state.activeKey = payload
  },
  activePage(state, payload) {
    state.activePage = payload
  },
}

export const actions = {
  updateActiveKey({ commit }, payload) {
    commit('activeKey', payload)
  },
  updateActivePage({ commit }, payload) {
    commit('activePage', payload)
  },
}
