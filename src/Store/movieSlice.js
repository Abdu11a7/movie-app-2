// features/movies/movieSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../API/FetchData"; // Your existing API functions

const initialState = {
  movies: [],
  popularMovies: [],
  newestMovies: [],
  filteredMovies: [],
  currentMovie: null,
  genres: [],
  languages: [],
  loading: false,
  error: null,
};

// Async Thunks
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await api.getAllMovies();
  return response.data;
});

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    return await api.getPopularMovies();
  }
);

export const fetchNewestMovies = createAsyncThunk(
  "movies/fetchNewestMovies",
  async () => {
    return await api.getNewestMovies();
  }
);

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (imdbID) => {
    const response = await api.getMovieById(imdbID);
    return response.data;
  }
);

export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (query) => {
    return await api.getMovieBySearch(query);
  }
);

export const fetchMoviesByType = createAsyncThunk(
  "movies/fetchMoviesByType",
  async (type) => {
    const response = await api.getMovieByType(type);
    return response.data;
  }
);

export const filterMoviesByGenre = createAsyncThunk(
  "movies/filterMoviesByGenre",
  async (genre) => {
    return await api.filterByGenre(genre);
  }
);

export const filterMoviesByLanguage = createAsyncThunk(
  "movies/filterMoviesByLanguage",
  async (language) => {
    return await api.filterByLanguage(language);
  }
);

export const fetchAllGenres = createAsyncThunk(
  "movies/fetchAllGenres",
  async () => {
    return await api.getAllGenres();
  }
);

export const fetchAllLanguages = createAsyncThunk(
  "movies/fetchAllLanguages",
  async () => {
    return await api.getAllLanguages();
  }
);

export const addMovie = createAsyncThunk("movies/addMovie", async (movie) => {
  const response = await api.addMovie(movie);
  return response.data;
});

export const updateMovie = createAsyncThunk(
  "movies/updateMovie",
  async ({ id, movie }) => {
    const response = await api.editMovie(id, movie);
    return response.data;
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (imdbID) => {
    await api.deleteMovie(imdbID);
    return imdbID;
  }
);

export const addReview = createAsyncThunk(
  "movies/addReview",
  async ({ id, review }) => {
    const response = await api.addReviewToMovie(id, review);
    return response;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearCurrentMovie: (state) => {
      state.currentMovie = null;
    },
    clearFilteredMovies: (state) => {
      state.filteredMovies = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Movies
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Popular Movies
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
      })

      // Newest Movies
      .addCase(fetchNewestMovies.fulfilled, (state, action) => {
        state.newestMovies = action.payload;
      })

      // Movie by ID
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.currentMovie = action.payload;
      })

      // Search Movies
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.filteredMovies = action.payload;
      })

      // Movies by Type
      .addCase(fetchMoviesByType.fulfilled, (state, action) => {
        state.filteredMovies = action.payload;
      })

      // Filter by Genre
      .addCase(filterMoviesByGenre.fulfilled, (state, action) => {
        state.filteredMovies = action.payload;
      })

      // Filter by Language
      .addCase(filterMoviesByLanguage.fulfilled, (state, action) => {
        state.filteredMovies = action.payload;
      })

      // All Genres
      .addCase(fetchAllGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })

      // All Languages
      .addCase(fetchAllLanguages.fulfilled, (state, action) => {
        state.languages = action.payload;
      })

      // Add Movie
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })

      // Update Movie
      .addCase(updateMovie.fulfilled, (state, action) => {
        const index = state.movies.findIndex(
          (movie) => movie.imdbID === action.payload.imdbID
        );
        if (index !== -1) {
          state.movies[index] = action.payload;
        }
        if (state.currentMovie?.imdbID === action.payload.imdbID) {
          state.currentMovie = action.payload;
        }
      })

      // Delete Movie
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter(
          (movie) => movie.imdbID !== action.payload
        );
      })

      // Add Review
      .addCase(addReview.fulfilled, (state, action) => {
        if (state.currentMovie?.imdbID === action.payload.imdbID) {
          state.currentMovie = action.payload;
        }
      });
  },
});

export const { clearCurrentMovie, clearFilteredMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
