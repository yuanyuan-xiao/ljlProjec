import Vue from 'vue'
import Vuex from 'vuex'

import {mockUser} from '@/api/index'
Vue.use(Vuex)

const state = {
  user: []
};
const mutations = {
  GETUSER(state, result) {
    state.user = result;
  }
};
const actions = {
  async getUser({commit}) {
    let result = await mockUser();
    if(result.code === 200) {
      console.log(result);
      commit('GETUSER', result.data);
    }
  }
};
const getters = {};

export default new Vuex.Store({
  state,mutations,actions,getters
})