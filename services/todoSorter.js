
module.exports = (todos) => {
  let sortFunc = (a, b) => a.dueDate - b.dueDate,

      completed = todos.filter(todo => todo.completed)
                      .sort(sortFunc),

      uncompleted = todos.filter(todo => !todo.completed)
                        .sort(sortFunc);

    return uncompleted.concat(completed);
};