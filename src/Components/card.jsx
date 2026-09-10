import "../styles/card.css";
import img from "../assets/images/App_disign.png";
import { useNavigate } from "react-router";

export default function Card({ movieData, changeResults }) {
  const Navigate = useNavigate();
  const { id, image, title, releaseDate, rating } = movieData;
  return (
    <div className="card">
      <img src={image} alt="card" />
      <div>
        <h3 className="card-name">{title}</h3>
        <p className="release-date">
          {new Date(releaseDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="star-note">⭐ {rating}</p>
        <button
          className="detail-btn"
          onClick={() => {
            Navigate(`/movie/${id}`);
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
}
