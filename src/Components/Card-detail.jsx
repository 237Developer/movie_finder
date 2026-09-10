import Navbar from "./Navbar";
import "../styles/card-detail.css";
import movies from "../../movieData";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export default function MovieDetail() {
  const Navigate = useNavigate();

  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id);
  const {
    title,
    image,
    releaseDate,
    genres,
    synopsis,
    director,
    runtime,
    rating,
  } = movie;
  return (
    <div className="movie-detail-page">
      <Navbar />

      <main className="movie-detail">
        <button
          className="back-btn"
          onClick={() => {
            Navigate("/search");
          }}
        >
          ← Back
        </button>

        <div className="movie-content">
          <img src={image} alt="Movie poster" className="movie-poster" />

          <div className="movie-info">
            <h1 className="movie-title">{title}</h1>

            <div className="movie-meta">
              <span>⭐ {rating}</span>
              <span>
                {" "}
                {new Date(releaseDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>{runtime} min</span>
            </div>

            <div className="movie-genres">
              {genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>

            <div className="movie-section">
              <h2>Synopsis</h2>

              <p>{synopsis}</p>
            </div>

            <div className="movie-section">
              <h2>Director</h2>
              <p>{director}</p>
            </div>

            <div className="movie-section">
              <h2>Language</h2>
              <p>English</p>
            </div>

            <div className="movie-section">
              <h2>Release Date</h2>
              <p>
                {" "}
                {new Date(releaseDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
