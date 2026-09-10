import Button from "../Components/button.jsx";
import "../styles/home.css";
import { useNavigate } from "react-router";
export default function Home() {
  function handleClick() {
    Navigate("search");
  }
  const Navigate = useNavigate();
  return (
    <div className="home">
      <h1>Discover your favorite movies</h1>
      <p>seach thousands of movies instantly</p>
      <Button
        className="main-btn"
        text="Start Searching"
        handleClick={handleClick}
      />
    </div>
  );
}
