import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  const response = await fetch("https://reactnative.dev/movies.json");
  const json = await response.json();
  return json.movies;
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.error = "";
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.error = action.error.message;
    });
  },
});

// export const {} = movieSlice.actions;
export default movieSlice.reducer;
