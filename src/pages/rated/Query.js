export const fetchRateMovies = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=${
      process.env.REACT_APP_API_KEY
    }`
  );
  return response.json();
};
export const fetchRateTvShows = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=${
      process.env.REACT_APP_API_KEY
    }`
  );
  return response.json();
};
