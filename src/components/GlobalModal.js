import React from "react";
import Modal from "../UI/Modal/Modal";
import { useSelector } from "react-redux";
import DeleteTaskForm from "./modalForms/DeleteTaskForm";
import EditTaskForm from "./modalForms/EditTaskForm";

export const MODAL_TYPES = {
  CREATE_MODAL: "CREATE_MODAL",
  DELETE_MODAL: "DELETE_MODAL",
  EDIT_MODAL: "UPDATE_MODAL",
};

const MODAL_COMPONENTS = {
  [MODAL_TYPES.DELETE_MODAL]: DeleteTaskForm,
  [MODAL_TYPES.EDIT_MODAL]: EditTaskForm,
  // [MODAL_TYPES.EDIT_MODAL]: CreateTaskForm,
};

const GlobalModal = () => {
  const type = useSelector((state) => state.modal.modalType);

  function renderComponent() {
    const ModalComponent = MODAL_COMPONENTS[type];
    if (!type || !ModalComponent) return null;
    return <ModalComponent />;
  }

  return <Modal>{renderComponent()}</Modal>;
};

export default GlobalModal;
