import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class TodoActions {
  constructor (private ngRedux: NgRedux<IAppState>) {}

  static ADD_TODO: string = 'ADD_TODO';
  static DELETE_TODO: string = 'DELETE_TODO';
  static EDIT_TODO: string = 'EDIT_TODO';
  static TOGGLE_TODO: string = 'TOGGLE_TODO';
  static DELETE_COMPLETED_TODOS: string = 'DELETE_COMPLETED_TODOS';

  addTodo(title): void {
    this.ngRedux.dispatch({ type: TodoActions.ADD_TODO , title : title });
  }
  deleteTodo(id: String): void {
    this.ngRedux.dispatch({ type: TodoActions.DELETE_TODO , id : id});
  }
  toggleTodo(id: String ): void {
    this.ngRedux.dispatch({ type: TodoActions.TOGGLE_TODO , id : id });
  }
  editTodo(id: String,editedTitle: String): void {
    this.ngRedux.dispatch({ type: TodoActions.EDIT_TODO , id: id, title:editedTitle });
  }
  deleteCompletedTodos(): void {
    this.ngRedux.dispatch({ type: TodoActions.DELETE_COMPLETED_TODOS });
  }
}

export interface ITodoAction {
  type: string;
  id: number;
  title?: string;
}
