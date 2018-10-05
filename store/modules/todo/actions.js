import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_DONE } from "./mutation-types";
function* genId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const generateId = genId();

export default {
  addTodo({ commit }, title) {
    commit(ADD_TODO, {
      title,
      id: generateId.next().value,
      done: false
    });
  },
  deleteTodo({ commit }, id) {
    commit(DELETE_TODO, id);
  },
  editTodo({ commit }, todo) {
    commit(EDIT_TODO, todo);
  },
  toggleDone({ commit }, id) {
    commit(TOGGLE_DONE, id);
  }
}
