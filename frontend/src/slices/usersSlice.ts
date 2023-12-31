import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { ThunkMiddleware, Middleware, AnyAction, Dispatch } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'; 

export const myMiddleware: Middleware<{}, { users: UserState }, Dispatch<AnyAction>> = (store) => (next) => (action) => {
  return next(action);
};

export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  region: string;
}

export interface UserState {
  users: Record<string, User>;
  selectedUserId: string | null;
}

const initialState:UserState = {
  users: {},
  selectedUserId: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser(state, action) {
      const user = action.payload;
      const userId = uuidv4();
      state.users[userId]= {
        id: userId,
        name: user.name,
        username: user.username,
        password: user.password,
        region: user.region,
      }
    },
    getUser(state: UserState, action: PayloadAction<{ selectedUserId: string }>) {
      return {
        ...state,
        selectedUserId: action.payload.selectedUserId,
      };
    }
  },
})

// Selectors
export const selectUsers = (state: { users: UserState }) => state.users.users;

// Additional selectors can be added using createSelector if needed
export const selectUserById = (userId: string) =>
  createSelector([selectUsers], (users) => users[userId]);

export const { createUser, getUser } = usersSlice.actions
export default usersSlice.reducer
