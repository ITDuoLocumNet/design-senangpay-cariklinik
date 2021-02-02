export const state = () => ({
  search: '',
  category: 'klinik',
  radius: 50,
  position: false,
  page: 1,
})

export const mutations = {
  search(state, payload) {
    state.search = payload
  },
  category(state, payload) {
    state.category = payload
  },
  radius(state, payload) {
    state.radius = payload
  },
  position(state, payload) {
    state.position = payload
  },
  page(state, payload) {
    state.page = payload
  },
  allFilter(state, payload) {
    if (payload.search) state.search = payload.search
    if (payload.category) state.category = payload.category
    if (payload.radius) state.radius = payload.radius
    if (payload.position) state.position = payload.position
    if (payload.page) state.page = payload.page
  },
}

export const actions = {
  updateSearch({ commit }, payload) {
    commit('search', payload)
  },
  updateCategory({ commit }, payload) {
    commit('category', payload)
  },
  updateRadius({ commit }, payload) {
    commit('radius', payload)
  },
  updatePosition({ commit }, payload) {
    commit('position', payload)
  },
  updatePage({ commit }, payload) {
    commit('page', payload)
  },
  updateAllFilter({ commit }, payload) {
    commit('allFilter', payload)
  },
}
