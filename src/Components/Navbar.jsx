import { NavLink } from "react-router";
import "../styles/navbar-style.css";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <div>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/search"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Search
        </NavLink>
        <NavLink
          to="/about"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
