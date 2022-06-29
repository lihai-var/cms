const state = {
  name: 666,
  token: null,
  isLogin: false
}

const actions = {
  saveCommonValue ({ commit }, value) {
    commit('SAVE_COMMON_VALUE', value);

  }
}

const mutations = {
  SAVE_COMMON_VALUE (state, obj) {
    state[obj.key] = obj.value;
    // state.data = data;
  }
}

export default {
  state,
  actions,
  mutations
}