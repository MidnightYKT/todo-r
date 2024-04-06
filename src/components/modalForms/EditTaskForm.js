import React, { useState } from "react";

import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions";
import { changeTask } from "../../api/todoListServices";

const EditTaskForm = () => {
  const task = useSelector((state) => state.modal.data);
  const [updatedTask, setUpdatedTask] = useState(task.name);
  const dispatch = useDispatch();

  function onChange(event) {
    setUpdatedTask(event.target.value);
  }

  function onClose() {
    dispatch(closeModal());
  }

  function onSave() {
    dispatch(changeTask({ ...task, name: updatedTask }));
    onClose();
  }

  return (
    <div>
      <div>
        <h3>Edit Modal</h3>
        <Input value={updatedTask} onChange={onChange} />
        <Button onClick={onSave}>Save</Button>
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditTaskForm;
