import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import plugins from './plugins'
import modules from './modules'

export default () => {
  return new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules,
    plugins,
  })
};