import "./Contact.css";
import { FaEnvelope } from "react-icons/fa";

import { FaMapMarkerAlt } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const Contact = () => {
  const { isToggle, selectedOption } = useContext(GlobalContext);
  return (
    <div className="contact-container">
      {selectedOption === false ? (
        <h1 className="page-title">contact</h1>
      ) : (
        <h1 className="page-title">iletişim</h1>
      )}
      <div className="contact-wrapper">
        <div className="communication-wrapper">
          <a
            className={`communication-item ${!isToggle ? "light" : ""}`}
            href="mailto:icenomerfaruk@gmail.com"
          >
            <FaEnvelope size={20} color={!isToggle ? "black" : "white"} />
            icenomerfaruk@gmail.com
          </a>
          <a
            className={`communication-item ${!isToggle ? "light" : ""}`}
            href="https://www.google.com/maps/place/Bursa/@40.2212104,28.7026453,10z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt size={20} color={!isToggle ? "black" : "white"} />
            Bursa, Turkey
          </a>
        </div>
        <ul className="social-media-wrapper">
          <li>
            <a
              href="https://www.linkedin.com/in/icenomerfaruk/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-item"
            >
              <FaLinkedin
                className="social-media-icon"
                size={40}
                color={!isToggle ? "black" : "white"}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/omrfrkicn0465"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-item"
            >
              <FaGithub
                className="social-media-icon"
                size={40}
                color={!isToggle ? "black" : "white"}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/omeriicen/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-item"
            >
              <FaInstagram
                className="social-media-icon"
                size={40}
                color={!isToggle ? "black" : "white"}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCDq7RLkg5pZm_s1FtyWT3ZA"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-item"
            >
              <FaYoutube
                className="social-media-icon"
                size={45}
                color={!isToggle ? "black" : "white"}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
