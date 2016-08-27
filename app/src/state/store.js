import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  company_name: 'Visualization',
  metric_name: ''
};

export default new Vuex.Store({
  state,
  mutations
});