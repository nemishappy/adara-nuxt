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
  },
  members: [],
  memberLoaded: null,
  currentEditMember: {
    displayName: null,
    Name: null,
    totalOrder: null,
    netTotal: null,
  },
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
  getMembers(state) {
    return state.members
  },
  getMemberLoaded(state) {
    return state.memberLoaded
  },
  getEditMember(state) {
    return state.currentEditMember
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
  SET_MEMBERS(state, data) {
    state.members.push(data)
  },
  SET_LOADED(state, data) {
    state.memberLoaded = data
  },
  UPDATE_MEMBERS(state, data) {
    state.members = state.members.filter((members) => members.userId !== data);
  },
  SET_EDIT_MEMBER(state, data) {
    state.currentEditMember = {
      ...state.currentEditMember,
      ...data,
    }
  },
  SET_NAME(state, data) {
    state.currentEditMember.Name = data
  },
  SET_TOTAL(state, data) {
    state.currentEditMember.totalOrder = data
  },
  SET_NET(state, data) {
    state.currentEditMember.netTotal = data
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
  async setMembers({ commit, getters }) {
    const dataBase = this.$fire.firestore.collection("member");
    const dbResults = await dataBase.get();
    dbResults.forEach((doc) => {
      if (!getters.getMembers.some((member) => member.userId === doc.data().profile.userId)) {
        const data = {
          userId: doc.data().profile.userId,
          displayName: doc.data().profile.displayName,
          Name: doc.data().Name,
          pictureUrl: doc.data().profile.pictureUrl,
          netTotal: doc.data().netTotal,
          totalOrder: doc.data().totalOrder,
        };
        commit('SET_MEMBERS', data)
      }
    });
    commit('SET_LOADED', true)
  },
  setEditMember({ commit }, data){
    commit('SET_EDIT_MEMBER', data)
  }
  ,
  async updateMember({ commit , dispatch }, data) {
    
    commit('UPDATE_MEMBERS', data)
    await dispatch("setMembers");
  },
}
