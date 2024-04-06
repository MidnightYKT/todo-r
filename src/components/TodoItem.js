import React from "react";
import Button, { ButttonTheme } from "../UI/Button";
import CheckBox from "../UI/CheckBox";
import { useDispatch } from "react-redux";
import { changeTask } from "../api/todoListServices";
import { openModal } from "../redux/actions";
import { MODAL_TYPES } from "./GlobalModal";

const TodoItem = ({ task }) => {
  const dispatch = useDispatch();

  const changeTaskStatus = () => {
    dispatch(changeTask({ ...task, isDone: !task.isDone }));
  };

  const onDelete = () => {
    dispatch(openModal(MODAL_TYPES.DELETE_MODAL, task));
  };

  const onEdit = () => {
    dispatch(openModal(MODAL_TYPES.EDIT_MODAL, task));
  };

  return (
    <div>
      <span style={{ fontSize: "24px", paddingRight: "10px" }}>
        {task.name}
      </span>
      <CheckBox checked={task.isDone} onChange={changeTaskStatus} />

      <Button theme={ButttonTheme.DANGER} onClick={onDelete}>
        Delete
      </Button>

      <Button onClick={onEdit}>Edit</Button>
    </div>
  );
};

export default TodoItem;
