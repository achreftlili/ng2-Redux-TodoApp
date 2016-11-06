import { combineReducers } from 'redux';
const persistState = require('redux-localstorage');
import { todoReducer ,ITodo} from './todo.reducer';
import { Todo } from '../models/Todo';

export class IAppState {
  todos?: Array<any>;
};

export const INITIAL_STATE: IAppState = {
    todos: []
};

export const rootReducer = combineReducers<IAppState>({
  todos: todoReducer,
});

export const enhancers = [
  persistState('todos', { key: 'ng2-redux' })
];
