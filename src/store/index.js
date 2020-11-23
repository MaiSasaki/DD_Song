import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    users: [],
    valiFlag: false
  },
  mutations: {
    pushData(state, user) {
      if (state.users.length == 0) {
        user.id = 1; //配列に何もデータなかったら、id=1
      } else {
        //入ってたら配列の一番最後のid +1
        user.id = state.users.slice(-1)[0].id + 1;
      }
      state.users.push(user);
    },
    checkData(state, user) {
      if (user.area && user.team && user.song && user.artist && user.move) {
        state.valiFlag = true;
      } else {
        alert("全項目を記入してください");
        state.valiFlag = false;
      }
    },
    updData(state, user) {
      state.users.splice(user.id - 1, 1, user);
    }
  },
  actions: {
    setUser({ state, commit }, user) {
      commit('checkData', user);
      if (state.valiFlag) {
        commit('pushData', user)
        router.push("top");
      } else {
        return;
      }
    },
    updData({ commit }, user) {
      commit('updData', user);
    }
  }
})
