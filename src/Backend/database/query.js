import pool from "./pool.js";

async function getTenMovies() {
  const { rows } = await pool.query(
    `SELECT
      movies.id,
      movies.title,
      movies.image_url AS image,
      movies.rating,
      movies.release_date AS "releaseDate",
      movies.genres,
      movies.synopsis,
      movies.runtime,
      directors.title AS director
    FROM movies
    JOIN directors ON movies.director_id = directors.id
    LIMIT 10`,
  );

  return rows;
}

async function getMovieByName(title) {
  const { rows } = await pool.query(
    `SELECT
      movies.id,
      movies.title,
      movies.image_url AS image,
      movies.rating,
      movies.release_date AS "releaseDate",
      movies.genres,
      movies.synopsis,
      movies.runtime,
      directors.title AS director
    FROM movies
    JOIN directors ON movies.director_id = directors.id
    WHERE movies.title ILIKE $1
    LIMIT 10`,
    [`${title}%`],
  );

  return rows;
}

export { getTenMovies, getMovieByName };
