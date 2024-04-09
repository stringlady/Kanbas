import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counterreducer from "../a4/ReduxExamples/CounterRedux/counterreducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosreducer from "../a4/ReduxExamples/todos/todosreducer";
export type TodoType = {
    id: string;
    title: string;
  };
  
export interface LabState {
  helloReducer: {
    message: string;
  };
  counterReducer: {
    count: number;
  };
  addReducer: {
    sum: number;
  };
  todosReducer: {
    todos: TodoType[];
    todo: TodoType;
  };


}
const store = configureStore({
  reducer: {
    helloReducer,
    counterreducer,
    addReducer,
    todosreducer,
  },
});
export default store;