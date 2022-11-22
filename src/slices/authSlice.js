import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth, db } from '../firebase'
import {doc, setDoc} from'firebase/firestore'

const initialState = {
  user: {},
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({email,password}, {dispatch}) => {
    await createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(db, 'users', email),{
      savedShows: []
    })
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async ({email,password}, {dispatch}) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
)

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, {dispatch}) => {
    return signOut(auth)
  }
)

export const unsubscribe = createAsyncThunk(
  'auth/unsubscribe',
  async (_, {dispatch}) => {
    console.log('unsubscribe')
    onAuthStateChanged(auth, (currentUser) => {
      dispatch(setUser(currentUser))
    })
  }
)

export const uiSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = uiSlice.actions;

export default uiSlice.reducer;
