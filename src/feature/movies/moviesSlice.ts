import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IParamsGetMovies, IState } from "../../types";

const BASE_URL: string = `https://www.omdbapi.com/`;
const API_KEY_STRING: string = `?apiKey=${process.env.REACT_APP_OMDB_API_KEY}&`;

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (params: IParamsGetMovies) => {
    const { searchText, categoryMovies, currentPage } = params;

    let typeMovies = `${
      categoryMovies !== "all" ? `&type=${categoryMovies}` : ""
    }`;
    const response = await axios.get(
      `${BASE_URL}${API_KEY_STRING}s=${searchText}${typeMovies}&page=${currentPage}`
    );
    return response.data;
  }
);

export const getDetails = createAsyncThunk(
  "movies/getDetails",
  async (id: string | undefined) => {
    const response = await axios.get(
      `${BASE_URL}${API_KEY_STRING}i=${id}&Plot=ful`
    );
    return response.data;
  }
);

const initialState: IState = {
  movies: [],
  loading: false,
  error: false,
  searchText: "Terminator",
  categoryMovies: "all",
  singleMovie: {},
  totalResults: 0,
  currentPage: 1,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchText(state, { payload }) {
      state.searchText = payload;
    },
    setCategoryMovies(state, { payload }) {
      state.categoryMovies = payload;
    },
    clearSingleMovie(state) {
      state.singleMovie = {};
    },
    setCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
    resetError(state) {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getMovies.fulfilled, (state, { payload }) => {
      console.log(payload);
      if (payload.Response === "False") {
      }
      state.loading = false;
      state.movies = payload.Search || [];
      state.totalResults = payload.totalResults;
    });
    builder.addCase(getMovies.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(getDetails.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getDetails.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.singleMovie = payload;
    });
    builder.addCase(getDetails.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const {
  setSearchText,
  setCategoryMovies,
  clearSingleMovie,
  setCurrentPage,
  resetError,
} = moviesSlice.actions;

export default moviesSlice.reducer;
