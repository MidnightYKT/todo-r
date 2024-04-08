import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button, { ButttonTheme } from "../../UI/Button";
import { closeModal } from "../../redux/actions";
import { deleteTask } from "../../api/todoListServices";

const DeleteTaskForm = () => {
  const task = useSelector((state) => state.modal.data);
  const dispatch = useDispatch();

  function onClose() {
    dispatch(closeModal());
  }

  function onDelete() {
    dispatch(deleteTask(task));
    onClose();
  }

  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <h1> Are you sure you want to delete this task?</h1>
        {task.name}
      </div>

      <Button theme={ButttonTheme.DANGER} onClick={onDelete}>
        Delete
      </Button>
      <Button theme={ButttonTheme.CANCEL} onClick={onClose}>
        Cancel
      </Button>
    </div>
  );
};

export default DeleteTaskForm;
