import { NavLink } from "react-router-dom"; 
import "../Nav/Nav.css";

export const Nav = () => {
  return (
    <div className="NavBox">
      <NavLink
        className={({ isActive }) =>
          isActive ? "NavLink NavActive" : "NavLink"
        }
        to="/About Mi"
      >
        About Mi
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "NavLink NavActive" : "NavLink"
        }
        to="/"
      >
        Projects
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "NavLink NavActive" : "NavLink"
        }
        to="/Contact"
      >
        Contact
      </NavLink>
    </div>
  );
};
