import "./Header.css";
import Navbar from "../Navbar/Navbar";
import ToggleButton from "../ToggleButton/ToggleButton";
import Logo from "../../assets/Logo/logo.png";
import { NavLink } from "react-router-dom";
import ToggleLanguage from "../ToggleLanguage/ToggleLanguage";

const Header = () => {
  return (
    <header className="header-wrapper">
      <NavLink>
        <img src={Logo} alt="" className="logo" />
      </NavLink>
      <Navbar />
      <div className="toggles">
        <ToggleButton />
        <ToggleLanguage />
      </div>
    </header>
  );
};

export default Header;
