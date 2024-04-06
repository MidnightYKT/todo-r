const initialState = {
  todoList: [],
  modal: { isOpen: false, modalType: null, data: null },
};

function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TASKS":
      return { ...state, todoList: action.payload };
    case "OPEN_MODAL":
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: true,
          modalType: action.payload.modalType,
          data: action.payload.data,
        },
      };
    case "CLOSE_MODAL":
      return { ...state, modal: { ...state.modal, isOpen: false } };
    default:
      return state;
  }
}

export default todoListReducer;
