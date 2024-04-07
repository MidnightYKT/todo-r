import "./TodoList.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask, fetchTasks } from "../api/todoListServices";
import TodoItem from "./TodoItem";
import Button, { ButttonTheme } from "../UI/Button";
import Input from "../UI/Input";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const [inputTask, setInputTask] = useState("");

  const onChangeHandler = (event) => {
    setInputTask(event.target.value);
  };

  const onCreateTask = () => {
    dispatch(createTask({ name: inputTask, isDone: false }));
    setInputTask("");
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  console.log(todoList);

  return (
    <div className="todo">
      <h1 className="title">TODO LIST</h1>
      <Input
        value={inputTask}
        onChange={onChangeHandler}
        placeholder="Type task..."
      />
      <Button
        theme={ButttonTheme.CLEAR}
        onClick={onCreateTask}
        disabled={!true}
      >
        Create Task
      </Button>
      {todoList.map((el) => (
        <TodoItem key={el._id} task={el} />
      ))}
    </div>
  );
};

export default TodoList;
