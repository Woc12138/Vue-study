export default {
  completeCount(state) {
    return state.todos.reduce((preTotol, todo) => {
      return preTotol + (todo.complete ? 1 : 0);
    }, 0);
  },

  totalCount(state) {
    return state.todos.length;
  },

  checkAll(state, getters) {
    //注意：使用getters时，必须放在第二位，因为第一位默认是state
    return (
      getters.completeCount === getters.totalCount && getters.completeCount > 0
    );
  }
};
