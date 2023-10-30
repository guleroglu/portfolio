import "./ContactButton.css";
import { NavLink } from "react-router-dom";

const ContactButton = () => {
  return (
    <NavLink to="/contact" className="contact-button">
      CONTACT ME
    </NavLink>
  );
};

export default ContactButton;
