
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../Redux/todoSlice';

export const AddPage = () => {
    const [task, setTask] = useState("");
    const handelChange =(e)=> {
        setTask (e.target.value);
    }; 
    

    const dispatch = useDispatch ();
    const AddHandler = (e) => {
        e.preventDefault();
        dispatch(createTodo ({task}));
        
       

    }; 
  return (
    <div>
<form>

    <input onChange={handelChange}/>
    <button onSubmit={AddHandler}>Add</button>
</form>


    </div>
  )
}

export default AddPage;