export default {
  addTodo({ commit }, todo) {
    commit("addTodo", { todo });
  },
  deleteTodo({ commit }, index) {
    commit("deleteTodo", { index });
  },
  selectAll({ commit }, isChecked) {
    commit("selectAll", { isChecked });
  },
  deleteAllCompleted({ commit }) {
    commit("deleteAllCompleted");
  }
};
