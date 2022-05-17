import React, { useEffect, useMemo, useState } from "react";
import { ViewModel } from "./viewModel";

export const Todo: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    viewModel.submitform(text);
    setText("");
  };

  const viewModel = useMemo(() => new ViewModel(), []);

  useEffect(() => {
    const observer = viewModel.subscribe((e) => setTodos(e));

    return () => {
      observer.unsubscribe();
    };
  }, [viewModel]);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      {todos.map((e, i) => (
        <div key={`${i}`}>{e}</div>
      ))}
    </div>
  );
};
