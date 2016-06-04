let nextTodoId = 0;

// Just return the action object by wrapping it around parens in an arrow function.
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: (nextTodoId++).toString(),
  text
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});