export const formatMovieInfo = (movie) => {
  const genre = JSON.parse(movie.genres).map(
    (genre) => genre.charAt(0).toUpperCase() + genre.slice(1)
  );

  const duration = `${Math.floor(movie.duration / 60)}hr ${
    movie.duration % 60
  }mins`;

  const title = movie.title;

  const views =
    Math.abs(movie.views) > 999
      ? Math.sign(movie.views) * (Math.abs(movie.views) / 1000).toFixed(1) + "k"
      : Math.sign(movie.views) * Math.abs(movie.views);

  const image = movie.image;

  return { genre, duration, title, views, image };
};
