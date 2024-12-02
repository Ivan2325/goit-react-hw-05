import axios from "axios";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFlNDAxOWI2Y2E0ZmU1MDYyOTI2MzFjOGYwN2E0OSIsIm5iZiI6MTczMzEzNjczMS45NTUwMDAyLCJzdWIiOiI2NzRkOTE1YjdjMWQ2OThiN2RmN2YxZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2GA-sN4RQZjWEKnBbDZ1FMw2_rK_hCllYMd9Y_MF2dM";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const options = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export const fetchMovies = async () => {
  const response = await axios(`trending/movie/day`, options);
  return response.data.results;
};

export const fetchMovieById = async (movieId) => {
  const response = await axios(`/movie/${movieId}`, options);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios(`/movie/${movieId}/credits`, options);
  return response.data;
};

export const fetchMovieReview = async (movieId) => {
  const response = await axios(`/movie/${movieId}/reviews`, options);
  return response.data;
};

export const fetchMovieSearch = async (query, page) => {
  const response = await axios(
    `/search/movie?query=${query}&page=${page}`,
    options
  );
  return response.data;
};