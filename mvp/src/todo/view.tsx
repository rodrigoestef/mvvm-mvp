import React from "react";
import { todoPresetation, iPresentationContract } from "./presentation";

export class Todo extends React.Component implements iPresentationContract {
  private presentation: todoPresetation;
  state = {
    text: "",
    todos: [],
  };
  constructor(props: any) {
    super(props);
    this.presentation = new todoPresetation(this);
  }

  addTodo(todos: string[]): void {
    this.setState({ todos });
  }

  handleChange(e: any) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.presentation.submitform(this.state.text);
    this.setState({ text: "" });
  }
  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            value={this.state.text}
            onChange={(e) => this.handleChange(e)}
            placeholder="add todo"
          />
        </form>
        {this.state.todos.map((e, i) => (
          <div key={`${i}`}>{e}</div>
        ))}
      </>
    );
  }
}
