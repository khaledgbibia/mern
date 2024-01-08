import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todo/getTodos", async (payload) => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/todos");
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const createTodo = createAsyncThunk ("todo/createTodos", async (payload) =>{

  try {
    console.log(payload)
    const { data } = await axios.post("http://localhost:5000/api/todos", payload);
    return data;

  } catch (error) {
    console.log(error);
  }
})



const todoSlice = createSlice({
  name: "todo",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.mytodos = action.payload;
      state.loading = false;
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.loading = false;
    });
//////////////////////////////////////////
/////////////////////////////////////////////////////////
builder.addCase(createTodo.pending, (state) => {
  state.loading = true;
});
builder.addCase(createTodo.fulfilled, (state, action) => {
  state.createdTodo = action.payload;
  state.loading = false;
});
builder.addCase(createTodo.rejected, (state) => {
  state.loading = false;
});


  },
});

export default todoSlice.reducer;
