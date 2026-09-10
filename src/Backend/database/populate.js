import { Client } from "pg";
import movies from "../../../movieData.js";

const serverAddress = process.argv[2];

if (!serverAddress) {
  console.error("Usage: node populate.js <server-address>");
  process.exit(1);
}

const client = new Client({
  connectionString: serverAddress,
});

async function populate() {
  try {
    await client.connect();

    console.log("Connected to PostgreSQL");

    await client.query(
      `DROP TABLE IF EXISTS movies;
        DROP TABLE IF EXISTS directors`,
    );

    // Créer la table directors
    await client.query(`
      CREATE TABLE directors (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL
      );
    `);

    // Créer la table movies
    await client.query(`
      CREATE TABLE movies (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        image_url TEXT,
        rating DECIMAL(3,1),
        release_date DATE,
        genres TEXT[],
        synopsis TEXT,
        director_id INTEGER NOT NULL,
        runtime INTEGER,

        FOREIGN KEY (director_id)
          REFERENCES directors(id)
      );
    `);

    console.log("Tables created");

    // Récupérer les réalisateurs uniques
    const directors = [...new Set(movies.map((movie) => movie.director))];

    // Insérer les réalisateurs
    const directorIds = {};

    for (const director of directors) {
      const result = await client.query(
        `
        INSERT INTO directors (title)
        VALUES ($1)
        RETURNING id;
        `,
        [director],
      );

      directorIds[director] = result.rows[0].id;
    }

    console.log("Directors inserted");

    // Insérer les films
    for (const movie of movies) {
      await client.query(
        `
        INSERT INTO movies (
          id,
          title,
          image_url,
          rating,
          release_date,
          genres,
          synopsis,
          director_id,
          runtime
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
        `,
        [
          movie.id,
          movie.title,
          movie.image,
          movie.rating,
          movie.releaseDate,
          movie.genres,
          movie.synopsis,
          directorIds[movie.director],
          movie.runtime,
        ],
      );
    }

    console.log("Movies inserted");
    console.log("Database successfully populated");
  } catch (error) {
    console.error("Error while populating database:");
    console.error(error);
  } finally {
    await client.end();
  }
}

populate();
