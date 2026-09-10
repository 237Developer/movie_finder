import Navbar from "../Components/Navbar";
import Button from "../Components/button";
import "../styles/errorPage.css";
import { useNavigate } from "react-router";

export default function ErrorPage() {
  const Navigate = useNavigate();
  function backHome() {
    Navigate("/");
  }
  return (
    <div className="error-page">
      <Navbar />
      <div>
        <h2>404</h2>
        <p className="page-not-found">Page not found</p>
        <p>the page you are looking for doesn't exist</p>
        <Button
          text="Back to Home"
          className="btn-error"
          handleClick={backHome}
        />
      </div>
    </div>
  );
}
