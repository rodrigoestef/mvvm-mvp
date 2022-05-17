export interface iPresentationContract {
  addTodo(todos: string[]): void;
}

export class todoPresetation {
  todos: string[] = [];

  constructor(private view: iPresentationContract) {}

  public submitform(text: string) {
    this.todos.push(text);
    this.view.addTodo(this.todos);
  }
}
