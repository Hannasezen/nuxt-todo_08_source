import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_DONE } from "./mutation-types";

export default {
  [ADD_TODO](state, todo) {
      state.todoList.push(todo);
  },
  [DELETE_TODO](state, id) {
    state.todoList = state.todoList.filter(todo => todo.id !== id);
  },
  [EDIT_TODO](state, { title, id }) {
    state.todoList = state.todoList.map(todo => {
      if(todo.id === id) {
        todo.title = title;
      }
      return todo;
    });
  },
  [TOGGLE_DONE](state, id) {
    state.todoList = state.todoList.map(todo => {
      if(todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
  }
}