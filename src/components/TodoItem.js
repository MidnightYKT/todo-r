import "./TodoItem.css";
import React from "react";
import CheckBox from "../UI/CheckBox";
import { useDispatch } from "react-redux";
import { changeTask } from "../api/todoListServices";
import { openModal } from "../redux/actions";
import { MODAL_TYPES } from "./GlobalModal";

import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

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
    <div className="item">
      <div>
        <CheckBox checked={task.isDone} onChange={changeTaskStatus} />
        <span>{task.name}</span>
      </div>

      <div className="icons">
        <FaRegTrashAlt onClick={onDelete} className="trash_button" />

        <FaEdit onClick={onEdit} className="edit_button" />
      </div>
    </div>
  );
};

export default TodoItem;
