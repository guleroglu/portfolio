import "./Header.css";
import Navbar from "../Navbar/Navbar";
import ToggleButton from "../ToggleButton/ToggleButton";
import Logo from "../../assets/Logo/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-wrapper">
      <NavLink to="/">
        <img className="logo" src={Logo} alt="" />
      </NavLink>
      <Navbar />
      <ToggleButton />
    </header>
  );
};

export default Header;
