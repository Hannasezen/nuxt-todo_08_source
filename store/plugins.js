import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

const plugins =  [
  createPersistedState({
    key: 'session',
    paths: [
      'Todo.todoList',
    ],
    storage: {
      getItem: (key) => Cookies.getJSON(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 365, secure: false }),
      removeItem: (key) => Cookies.remove(key)
    }
  })
];

export default plugins