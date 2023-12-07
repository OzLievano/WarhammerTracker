import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import  usersSlice, {myMiddleware} from "./slices/usersSlice";



export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
