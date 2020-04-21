export const todoInputHandler = (text) => {
    return {
      type: "ON_CHANGE_TODO_INPUT",
      payload: text,
    };
  };

  export const addTodoHandler = (todoItem) => {
    return {
      type: "Add_TODO",
      // Payload adalah value yang mau dikirim 
      payload: todoItem,
    };
  };