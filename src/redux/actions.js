export function getTodoListSuccess(date) {
  return {
    type: "GET_TASKS",
    payload: date,
  };
}

export function openModal(modalType, data) {
  return {
    type: "OPEN_MODAL",
    payload: { modalType, data },
  };
}

export function closeModal(modalType) {
  return {
    type: "CLOSE_MODAL",
    payload: { modalType },
  };
}
