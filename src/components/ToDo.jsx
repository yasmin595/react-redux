import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../store";

const ToDo = () => {
    const [task, setTask] = useState("");
   const tasks = useSelector((state)=> state.task);
   const dispatch = useDispatch();

   const handleFormSubmit =(e)=>{
    e.preventDefault();
  dispatch(addTask(task));
           return  setTask ("");
   };
   const handleTaskDelete = (id) =>{
    return dispatch(deleteTask(id));
   }
//    console.log("react state", state.task)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-blue-800">📝 To-Do List</h1>

      {/* Input Section */}
      <div className="flex gap-2 mb-6">
       <form onSubmit={handleFormSubmit}>
         <input value={task}
   onChange={(e)=>setTask(e.target.value)}          id="taskInput"
          type="text"
          placeholder="Enter a new task..."
          className="border border-blue-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
        />
        <button
          id="addTaskBtn"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2"
        >
          Add
        </button>
       </form>
      </div>

      {/* Task List */}
      <ul id="taskList" className="w-full max-w-md space-y-2">
        {
            tasks.map((curTask, index)=>{
                return  <li key={index} className="flex justify-between items-center bg-white shadow-sm rounded-xl px-4 py-2 border">
          <span className="line-through text-gray-400 cursor-pointer">{index}:
         {curTask}
          </span>
          <button onClick ={()=> handleTaskDelete(index)}className="text-red-600 hover:text-red-800">✕</button>
        </li>
            })
        }
        {/* Example Task Item */}
   

       
      </ul>
    </div>
  );
};

export default ToDo;
