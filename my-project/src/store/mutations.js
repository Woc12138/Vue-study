export default {
  addTodo(state, { todo }) {
    state.todos.unshift(todo);
  },
  deleteTodo(state, { index }) {
    state.todos.splice(index, 1);
  },
  selectAll(state, { isChecked }) {
    state.todos.forEach(todo => {
      todo.complete = isChecked;
    });
  },
  deleteAllCompleted(state) {
    state.todos = state.todos.filter(todo => !todo.complete);
  }
};
