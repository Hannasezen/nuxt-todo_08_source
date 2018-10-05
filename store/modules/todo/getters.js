export default {
    getTodoList(state, _, store) {
      const query = store.Search.query.toLowerCase();
      if(!!query) {
        return state.todoList.filter(todo => {
          return todo.title.toLowerCase().indexOf(query) !== -1;
        });
      } else {
        return state.todoList;
      }
    }
  }