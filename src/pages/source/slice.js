import { createSlice } from "@reduxjs/toolkit";

// const STORAGE_KEY = "formState";
// const initialState = {
//   data: getState(STORAGE_KEY),
// };
const initialState = {
  contentData:[]
};

const dataSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    createData(state, action) {
      state.contentData.push(action.payload);
    console.log('initial',initialState.data)
    },
    deleteData (state, action){
      console.log(action.payload);
      const id=action.payload
      state.contentData = state.contentData.filter((item) => item.id !== id); // Remove by ID
    },
    updateData: (state, action) => {
       const { id,header,message } = action.payload;
      const item = state.contentData.find((item) => item.id===id);
      if (item) {
        item.header = header; 
        item.message = message; 
      }
      
    },
    // reset() {},
  },
});
export const { createData, deleteData, updateData } = dataSlice.actions;
export default dataSlice.reducer;
