import { createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../firebase'

const initialState = {
  user: {},
};

export const uiSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    signUp: (state,action) => {
      const {email, password} = action.payload
      return createUserWithEmailAndPassword(auth, email, password)
    },
    logOut: () => {
      return signOut(auth)
    },signIn: (state,action) => {
      const {email, password} = action.payload
      return signInWithEmailAndPassword(auth, email, password)
    },unsubscribe: () => {
      onAuthStateChanged(auth, (currentUser) => {
        dispatch(setUser(currentUser))
      })
    }
  },
});

export const { setUser, signUp, logOut,unsubscribe,signIn } = uiSlice.actions;

export default uiSlice.reducer;
