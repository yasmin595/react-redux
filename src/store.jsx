import {createStore} from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
export  const addTask=(data)=>{
  return {type:ADD_TASK,payload:data};
 };

 export const deleteTask = (id)=>{
  return {type:DELETE_TASK, payload:id}
 }

const initialState={
    task:[],
    isLoading:false,
}

const taskReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_TASK:
            
      return{
        ...state,
        task:[...state.task, action.payload],
      };
        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) =>{
                return index !== action.payload;
            })
            
      return {
        ...state,
        task: updatedTask,
      }
    
        default:
           return state;
    }

}
 export  const store = createStore(taskReducer);
console.log(store)
console.log("initial",store.getState());
store.dispatch(addTask("added suborna code"));
store.dispatch(addTask("added yasminnncode"));
store.dispatch(addTask("added urmi code"));
store.dispatch(addTask("added nasima code"));
store.dispatch(addTask("added kobori code"));
console.log("updated state",store.getState());
store.dispatch(addTask("added yasmin task"));
console.log("updated state",store.getState());
store.dispatch(deleteTask(1));
console.log("deleted state",store.getState());
