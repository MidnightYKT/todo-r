import React from "react";
import ST from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions";

const Modal = ({ children }) => {
  const isOpen = useSelector((state) => state.modal.isOpen);

  const dispatch = useDispatch();

  function close() {
    dispatch(closeModal());
  }

  function priventCloseOnContent(event) {
    event.stopPropagation();
  }

  return (
    <div
      onClick={close}
      className={isOpen ? ST.modal + " " + ST.active : ST.modal}
    >
      <div
        onClick={priventCloseOnContent}
        className={
          isOpen ? ST.modal_content + " " + ST.active : ST.modal_content
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
