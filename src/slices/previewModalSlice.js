import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showPreviewModal: false,
  movieTop: 0,
  movieLeft: 0,
  movieRight: 0,
  movieBottom: 0,
  movieWidth: 0,
  movieHeight: 0,
  movie: {}
};

export const previewModalSlice = createSlice({
  name: 'previewModal',
  initialState,
  reducers: {
    setShowPreviewModal: (state, action) => {
      state.showPreviewModal = action.payload;
    },
    setMovieTop: (state, action) => {
      state.movieTop = action.payload;
    },
    setMovieLeft: (state, action) => {
      state.movieLeft = action.payload;
    },
    setMovieRight: (state, action) => {
      state.movieRight = action.payload;
    },
    setMovieBottom: (state, action) => {
      state.movieBottom = action.payload;
    },
    setMovieWidth: (state, action) => {
      state.movieWidth = action.payload;
    },
    setMovieHeight: (state, action) => {
      state.movieHeight = action.payload;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { setShowPreviewModal, setMovieTop, setMovieLeft, setMovieRight, setMovieBottom, setMovieWidth, setMovieHeight, setMovie } = previewModalSlice.actions;

export default previewModalSlice.reducer;
