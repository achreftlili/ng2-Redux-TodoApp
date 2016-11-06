export class Todo {
	id: String;
	completed: Boolean;
	editing: Boolean;
  title: String;

	constructor(id: String,title: String) {
		this.id = id;
		this.completed = false;
		this.editing = false;
		this.title = title.trim();
	}
}
