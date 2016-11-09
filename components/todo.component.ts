import { Component, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from 'ng2-redux';
import { rootReducer, enhancers } from '../store/index';
import { TodoActions } from '../actions/todo.actions';
import { Todo } from '../models/Todo';
import { IAppState } from '../store';

@Component({
  selector: 'todo',
  templateUrl: './components/todo.component.html' ,
  providers: [ TodoActions ],
  styleUrls: ['./components/todo.component.css']
})
export class TodoComponent {
  todoInput:String = '';
  @select('todos') todos$: Observable<Object>;
  completedTodos$ = this.ngRedux.select(state=>state.todos.filter(n=>n.completed===true))

  constructor(public todoActions: TodoActions,private ngRedux: NgRedux<IAppState>) {}

  private addTodo(inputTodo) {
    if (inputTodo.value.length === 0) {
        return ;
    }
     this.todoActions.addTodo(inputTodo.value);
     this.todoInput = '';
  }
  private deleteTodo(todo) {
     this.todoActions.deleteTodo(todo.id);
  }
  private toggleCompletion(todo) {
     this.todoActions.toggleTodo(todo.id);
  }
  private toggleEditTodo(todo: Todo) {
		todo.editing = !todo.editing;
  }
  private deleteCompletedTodos() {
     this.todoActions.deleteCompletedTodos();
  }
	private stopEditing(todo: Todo, editedTitle: string) {
		this.todoActions.editTodo(todo.id,editedTitle);
		todo.editing = false;
	}

	private updateEditingTodo(todo: Todo, editedTitle: string) {
		editedTitle = editedTitle.trim();
		todo.editing = false;

		if (editedTitle.length === 0) {
			return ;
		}
    this.todoActions.editTodo(todo.id,editedTitle);
  }
}
