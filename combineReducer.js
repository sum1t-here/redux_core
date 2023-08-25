import { createStore, bindActionCreators, combineReducers } from 'redux';

const ADD_TODO = 'add-todo';
const DEL_TODO = 'delete-todo';
const UPD_TODO = 'edit_todo';
const ADD_USER = 'add_user';

function todoReducer(state = [], action) {
  if (action.type == ADD_TODO) {
    const todoText = action.payload.todoText;
    return [
      ...state,
      {
        text: todoText,
        isFinished: false,
        id: state.length == 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  } else if (action.type == DEL_TODO) {
    const todoId = action.payload.todoId;
    return state.filter((t) => t.id != todoId);
  } else if (action.type == UPD_TODO) {
    const todo = action.payload.todo;
    const todoText = action.payload.todoText;
    return state.map((t) => {
      if (t.id == todo.id) {
        t.text = todoText;
      }
    });
  }
  return state;
}

function useReducer(state = [], action) {
  if (action.type == ADD_USER) {
    const todoText = action.payload.userName;
    return [
      ...state,
      {
        name: userName,
        isFinished: false,
        id: state.length == 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  }
  return state;
}

// action objects -> action methods(action creator)
const addTodo = () => ({ type: ADD_TODO, payload: { todoText: 'todo 1' } });
const { dispatch, subscribe, getState, replaceReducer } = createStore(
  todoReducer,
  []
);
subscribe(() => console.log(getState()));

// dispatch({ type: ADD_TODO, payload: { todoText: 'todo 1' } });
// // console.log(getState()); subscribe is doing this work

// dispatch({ type: ADD_TODO, payload: { todoText: 'todo 2' } });
//console.log(getState());

dispatch(add);
dispatch({ type: DEL_TODO, payload: { todoId: 1 } });
//console.log(getState());
