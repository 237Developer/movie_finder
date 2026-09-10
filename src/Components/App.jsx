import Navbar from "./Navbar.jsx";
import Home from "../pages/home.jsx";
import "../styles/app.css";
import { Outlet } from "react-router";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
}
