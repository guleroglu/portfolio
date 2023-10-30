import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const Navbar = () => {
  const { setIsHovered, isToggle } = useContext(GlobalContext);

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={!isToggle ? "light" : ""}
      >
        home
      </NavLink>
      <NavLink
        to="/whoami"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={!isToggle ? "light" : ""}
      >
        whoami
      </NavLink>
      <NavLink
        to="/skills"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={!isToggle ? "light" : ""}
      >
        skills
      </NavLink>
      <NavLink
        to="/contact"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={!isToggle ? "light" : ""}
      >
        contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
