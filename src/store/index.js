import Vue from 'vue'
import Vuex from 'vuex'
import Es6Promise from 'es6-promise'
import washcar from './modules/washcar'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
Es6Promise.polyfill()

const store = new Vuex.Store({
  modules: { washcar },
  getters,
  plugins: [createPersistedState({
    key: 'washcar'
  })]

})
export default store
