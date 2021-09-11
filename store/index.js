export const state = () => ({
  dialog: {
    isShow: false,
    title: '',
    message: '',
  },
  drawer: true,
  line: {
    pictureUrl: '',
    displayName: 'Display name',
    userId: '999999999',
  },
  member: {
      userId: null,
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
  register: {
    firstname: '',
    lastname: '',
    gender: 1,
    email: '',
    phone: '',
    birthday: new Date().toISOString().substr(0, 10),
  },
  user: {
    firstname: 'Firstname',
    lastname: 'Lastname',
    email: '',
    phone: '',
    expdate: '-',
  }
})

export const getters = {
  getDialog(state) {
    return state.dialog
  },
  getDrawer(state) {
    return state.drawer
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
  getRegister(state) {
    return state.register
  },
  getUser(state){
    return state.user
  }
}

export const mutations = {
  SET_DIALOG(state, data) {
    state.dialog = {
      ...state.dialog,
      ...data,
    }
  },SET_DRAWER (state, data){
    state.drawer = data
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
  SET_REGISTER(state, data) {
    state.register = {
    ...state.register,
      ...data,
    }
  },
  SET_USER(state, data) {
    state.user = {
      ...state.user,
      ...data,
    }
  }
}

export const actions = {
  setDialog({ commit }, data) {
    commit('SET_DIALOG', data)
  },
  setDrawer({ commit }, data) {
    commit('SET_DRAWER', data)
  },
  setLine({ commit }, data) {
    commit('SET_LINE', data)
  },
  setMember({ commit }, data) {
    commit('SET_MEMBER', data)
  },
  setRegister({ commit }, data) {
    commit('SET_REGISTER', data)
  },
  async setMembers({ commit, getters }) {
    const dataBase = this.$fire.firestore.collection("member").orderBy("totalOrder", "desc");
    const dbResults = await dataBase.get();
    dbResults.forEach((doc) => {
      if (!getters.getMembers.some((member) => member.userId === doc.data().profile.userId)) {
        const data = {
          userId: doc.data().profile.userId,
          displayName: doc.data().profile.displayName,
          Name: doc.data().Name,
          firstname: doc.data().profile.firstname,
          lastname: doc.data().profile.lastname,
          fullname: doc.data().profile.firstname +' '+ doc.data().profile.lastname,
          email: doc.data().profile.email,
          phone: doc.data().profile.phone,
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
    commit('SET_LOADED', false)
    commit('UPDATE_MEMBERS', data)
    
    await dispatch("setMembers");
  },
  async setUser ({ commit }){
    const dataBase = await this.$fire.firestore.collection("admin").doc(this.$fire.auth().currentUser.uid);
    const dbResults = await dataBase.get();
    commit("SET_USER", user);
  }
}
