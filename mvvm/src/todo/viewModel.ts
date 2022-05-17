import { Observable } from "../utils/Observer";

export class ViewModel {
  private observable: Observable<string[]> = new Observable<string[]>();

  private todos: string[] = [];

  submitform(newItem: string) {
    this.todos.push(newItem);
    this.observable.next(this.todos);
  }

  public subscribe(callback: (newValue: string[]) => void) {
    return this.observable.subscribe(callback);
  }
}
