import { createSlice, createSelector } from '@reduxjs/toolkit'
import { ThunkMiddleware, Middleware, AnyAction, Dispatch } from '@reduxjs/toolkit';

export const myMiddleware: Middleware<{}, { users: UserState }, Dispatch<AnyAction>> = (store) => (next) => (action) => {
  // Your middleware logic here
  return next(action);
};

interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  region: string;
}

export interface UserState {
  users: Record<string, User>;
  selectedUserId: null | number;
}

const initialState:UserState = {
  users: {},
  selectedUserId: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userCreated(state, action) {
      const user = action.payload;
      state.users[user.Id]= {
        id: user.id,
        name: user.name,
        username: user.username,
        password: user.password,
        region: user.region,
      }
    },
    getUser(state, action){
      return {
        ...state, 
        selectedUserId: action.payload.selectedUserId
      }
    }
  },
})

// Selectors
export const selectUsers = (state: { users: UserState }) => state.users.users;

// Additional selectors can be added using createSelector if needed
export const selectUserById = (userId: number) =>
  createSelector([selectUsers], (users) => users[userId]);

export const { userCreated, getUser } = usersSlice.actions
export default usersSlice.reducer