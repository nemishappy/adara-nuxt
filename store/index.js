export const state = () => ({
  dialog: {
    isShow: false,
    title: '',
    message: '',
  },
  line: {
    pictureUrl: null,
    displayName: 'Display name',
    userId: '999999999',
  },
  member: {
      totalOrder: '',
      netTotal: '',
  }
})

export const getters = {
  getDialog(state) {
    return state.dialog
  },
  getLine(state) {
    return state.line
  },
  getMember(state) {
    return state.member
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
  SET_MEMBER(state, data) {
    state.member = {
      ...state.member,
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
  setMember({ commit }, data) {
    commit('SET_MEMBER', data)
  },
}
