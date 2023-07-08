
// // import { legacy_createStore } from "redux";
// import { createStore } from "redux";
// import { reducer } from "../Components/Holiday";

// const store = createStore(reducer);
// console.log(store);

// // export { store };
import {applyMiddleware, legacy_createStore as createStore} from "redux"

import thunk from 'redux-thunk'
import reducer from "./reducer"

export const store = createStore(reducer, applyMiddleware(thunk))