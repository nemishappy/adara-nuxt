export const state = () => ({
  dialog: {
    isShow: false,
    title: '',
    message: '',
  },
  line: {
    pictureUrl: null,
    displayName: 'name',
    userId: null,
  },
})

export const getters = {
  getDialog(state) {
    return state.dialog
  },
  getLine(state) {
    return state.line
  },
}

export const mutations = {
  SET_DIALOG(state, data) {
    state.dialog = {
      ...state.dialog,
      ...data,
    }
  },
  SET_LINE(state, data) {
    state.line = {
      ...state.line,
      ...data,
    }
  },
}

export const actions = {
  setDialog({ commit }, data) {
    commit('SET_DIALOG', data)
  },
  setLine({ commit }, data) {
    commit('SET_LINE', data)
  },
}
