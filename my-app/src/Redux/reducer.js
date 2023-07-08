// import { FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS } from "./actionType";

//  const initialState = {
//     data: [],
//     loading: false,
//     error: false,
//   };
  
//   export const reducer = (state , action) => {
//     switch (action.type) {
//       case FETCH_LOADING:
//         return {
//           ...state,
//           loading: true,
//           error: false,
//         };
//       case FETCH_SUCCESS:
//         return {
//           ...state,
//           data: action.payload,
//           loading: false,
//           error: false,
//         };
//       case FETCH_ERROR:
//         return {
//           ...state,
//           data: [],
//           loading: false,
//           error: true,
//         };
//       default:
//         throw new Error('Invalid action type');
//     }
//   };

// import { useState } from "react";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const getAllData = createAsyncThunk("DataUsers",async()=>{
//     const res = await fetch(`https://voyawander-server.onrender.com/hotels`) ;
//     const ans =  res.json() ;
//     return ans ;
// })
// console.log(getAllData);
// export const DataUser = createSlice({
//     name:"DataUser",
//     initialState:{
//         user:[],
//         loading:false,
//         error:false 
//     },
//     extraReducers :{
//         [getAllData.pending] : (state)=>{
//             state.loading = true ;
//         },
//         [getAllData.fulfilled] : (state,action)=>{
//             state.loading = false ;
//             state.user = action.payload ;
//         },
//         [getAllData.rejected] : (state,action)=>{
//             state.loading = false ;
//             state.error = action.payload ;
//         }
//     }
// })

// export default DataUser.reducer ;
import React from 'react'

const reducer = () => {
  return (
    <div>
      
    </div>
  )
}

export default reducer
