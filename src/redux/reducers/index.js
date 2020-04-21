// const init_state = {
//   todoInput: "Hello World!",
//   todoList: [],
// };

// export default (state = init_state, action) => {
//   if (action.type === "ON_CHANGE_TODO_INPUT") {
//     return { ...state, todoInput: action.payload };
//   }
//   return { ...state };
// };

import { combineReducers } from "redux";
import todo from "./todo";
import user from "./user";

export default combineReducers(
  // Object ini diakses oleh parameter (state) di mapStateToProps
  {
    haha: todo,
    user,
  }
);