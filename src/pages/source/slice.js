import { createSlice } from "@reduxjs/toolkit";
import { deleteState, getState, saveState } from "./localStorage";

const STORAGE_KEY = "formState";
const initialState = {
  data: getState(STORAGE_KEY),
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createData(state, action) {
      console.log("created", action.payload);
      const newItem = action.payload;
      // state.data.push(newItem);
      saveState(STORAGE_KEY,newItem);
    },
    deleteData(state, action) {
      const id=action.payload;
      console.log(id);
       deleteState(STORAGE_KEY,id);
    },
    updateData(state,action){
console.log("initial",initialState);

    },
    reset() {},
  },
});

export const { createData, deleteData, updateData } = dataSlice.actions;
export default dataSlice.reducer;
