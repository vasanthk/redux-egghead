// Just return the action object by wrapping it around parens in an arrow function.
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: (nextTodoId++).toString(),
  text
});