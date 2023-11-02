import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const Navbar = () => {
  const { setIsHovered, isToggle, selectedOption } = useContext(GlobalContext);

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={!isToggle ? "light" : ""}
      >
        {selectedOption === false ? "home" : "anasayfa"}
      </NavLink>
      <NavLink
        to="/whoami"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={!isToggle ? "light" : ""}
      >
        {selectedOption === false ? "whoami" : "hakkımda"}
      </NavLink>
      <NavLink
        to="/skills"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={!isToggle ? "light" : ""}
      >
        {selectedOption === false ? "skills" : "yetenekler"}
      </NavLink>
      <NavLink
        to="/contact"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={!isToggle ? "light" : ""}
      >
        {selectedOption === false ? "contact" : "iletişim"}
      </NavLink>
    </nav>
  );
};

export default Navbar;
