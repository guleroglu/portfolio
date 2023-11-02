import { useContext } from "react";
import "./ContactButton.css";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";

const ContactButton = () => {
  const { selectedOption } = useContext(GlobalContext);
  return (
    <NavLink to="/contact" className="contact-button">
      {selectedOption === false ? "CONTACT ME" : "İLETİŞİM"}
    </NavLink>
  );
};

export default ContactButton;
