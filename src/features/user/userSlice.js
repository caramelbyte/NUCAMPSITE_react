import { createSlice } from '@reduxjs/toolkit';

// Initial state of the user slice, with no user logged in initially
const initialState = {
  currentUser: null,
};

// Creating the user slice with a reducer to set the current user
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Reducer to update the current user based on action payload
    setCurrentUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
  },
});

// Destructuring the reducer and actions from the user slice
export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;

// Selector to access the current user from the state
export const selectCurrentUser = (state) => state.user.currentUser;
