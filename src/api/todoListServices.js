import axios from "axios";
import { getTodoListSuccess } from "../redux/actions";

export const fetchTasks = () => {
  return (dispatch) => {
    axios
      .get("https://expressjs-server.vercel.app/todoList")
      .then((res) => {
        dispatch(getTodoListSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const changeTask = (task) => {
  return (dispatch) => {
    axios
      .patch(`https://expressjs-server.vercel.app/todoList/${task._id}`, task)
      .then((res) => {
        dispatch(fetchTasks());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createTask = (task) => {
  return (dispatch) => {
    axios
      .post(`https://expressjs-server.vercel.app/todoList`, task)
      .then((res) => {
        dispatch(fetchTasks());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteTask = (task) => {
  return (dispatch) => {
    axios
      .delete(`https://expressjs-server.vercel.app/todoList/${task._id}`)
      .then((res) => {
        dispatch(fetchTasks());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
