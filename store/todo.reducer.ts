import { TodoActions,ITodoAction } from '../actions/todo.actions';
import { Todo } from '../models/Todo';
import{ INITIAL_STATE }from '../store';

export interface ITodo {
  id: number;
  completed: boolean;
  editing: boolean;
  title: string;
}

export interface ITodos {
  todos: Todo[];
}

var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};
export function todoReducer(  state: Array<any> = INITIAL_STATE.todos, action:ITodoAction ): Array<Todo> {
  if (!state ) {
       return [];
   }
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return state.concat(new Todo(ID(),action.title));
    case TodoActions.EDIT_TODO:
       Object.assign({}, state, {
              state: state.map((todo, index) => {
                if(todo.id === action.id) {
                    todo.title= action.title;
                }
                return todo
              })
            });
      return state;
    case TodoActions.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id );
    case TodoActions.TOGGLE_TODO:
        Object.assign({}, state, {
               state: state.map((todo, index) => {
                 if(todo.id === action.id) {
                     todo.completed = !todo.completed;
                 }
                 return todo
               })
             });
      return state;
    case TodoActions.DELETE_COMPLETED_TODOS:
      return state.filter(todo => todo.completed === false );
    default:
      return state;
  }
}
